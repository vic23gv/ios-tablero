/* =====================================================================
 * IOS · fetch-data.js — El MOTOR (corre en la nube con GitHub Actions)
 * ---------------------------------------------------------------------
 * 1. Jala datos de fuentes gratuitas.
 * 2. Traduce números -> palancas (factores) con reglas transparentes.
 * 3. Calcula las señales con engine.js.
 * 4. Escribe data.json, que el tablero lee.
 *
 * Requiere Node 18+ (fetch global). Llaves opcionales por variables de
 * entorno: FRED_KEY (macro EE.UU.) y BANXICO_TOKEN (México). Si faltan,
 * esos factores quedan en manual y el motor corre igual con lo demás.
 * ===================================================================== */
const fs = require("fs");
const path = require("path");
const engine = require("./engine.js");

const FRED_KEY = process.env.FRED_KEY || "";
const BANXICO_TOKEN = process.env.BANXICO_TOKEN || "";

// ---------- utilidades ----------
async function getJSON(url) {
  const r = await fetch(url, { headers: { "Accept": "application/json", "User-Agent": "IOS-bot" } });
  if (!r.ok) throw new Error("HTTP " + r.status + " en " + url);
  return r.json();
}
function pct(a, b) { return b ? (a - b) / b * 100 : 0; }
function ymd(d) { return d.toISOString().slice(0, 10); }
function num(x) { const n = parseFloat(x); return isNaN(n) ? null : n; }

// ---------- 1. FUENTES ----------

// Miedo / Codicia (cripto) — sin llave
async function fetchFearGreed() {
  const j = await getJSON("https://api.alternative.me/fng/?limit=1");
  const d = j.data && j.data[0];
  return d ? { value: num(d.value), label: d.value_classification } : null;
}

// Precios cripto + serie 50 días para tendencia — sin llave
async function fetchCrypto() {
  const p = await getJSON("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd&include_24hr_change=true");
  let ma50 = null, last = null;
  try {
    const mc = await getJSON("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=50&interval=daily");
    const prices = (mc.prices || []).map(x => x[1]).filter(Number.isFinite);
    if (prices.length) {
      last = prices[prices.length - 1];
      ma50 = prices.reduce((s, v) => s + v, 0) / prices.length;
    }
  } catch (e) { console.warn("market_chart:", e.message); }
  return {
    btc: p.bitcoin && p.bitcoin.usd, eth: p.ethereum && p.ethereum.usd, sol: p.solana && p.solana.usd,
    btcChange: p.bitcoin && p.bitcoin.usd_24h_change, btcMA50: ma50, btcLast: last || (p.bitcoin && p.bitcoin.usd)
  };
}

// FRED (Reserva Federal EE.UU.) — requiere llave gratuita
async function fetchFredSeries(id, limit) {
  if (!FRED_KEY) return null;
  const url = `https://api.stlouisfed.org/fred/series/observations?series_id=${id}&api_key=${FRED_KEY}&file_type=json&sort_order=desc&limit=${limit}`;
  const j = await getJSON(url);
  return (j.observations || []).map(o => ({ date: o.date, v: num(o.value) })).filter(o => o.v !== null);
}

// Banxico (SIE) — requiere token gratuito. Serie con rango de ~90 días.
async function fetchBanxico(id) {
  if (!BANXICO_TOKEN) return null;
  const end = new Date();
  const start = new Date(end.getTime() - 95 * 864e5);
  const url = `https://www.banxico.org.mx/SieAPIRest/service/v1/series/${id}/datos/${ymd(start)}/${ymd(end)}?token=${BANXICO_TOKEN}`;
  const j = await getJSON(url);
  const s = j.bmx && j.bmx.series && j.bmx.series[0];
  return s ? s.datos.map(d => ({ date: d.fecha, v: num(String(d.dato).replace(/,/g, "")) })).filter(d => d.v !== null) : null;
}

// ---------- 2. REGLAS: números -> palancas ----------
// Cada regla devuelve el valor de opción del factor, o null si no hay dato.

function ruleSentiment(fg) {
  if (!fg) return null;
  const L = (fg.label || "").toLowerCase();          // usa la clasificación propia de la fuente
  if (L.indexOf("fear") >= 0) return "miedo";
  if (L.indexOf("greed") >= 0) return "codicia";
  if (fg.value == null) return null;                 // respaldo por número
  if (fg.value <= 45) return "miedo";
  if (fg.value >= 55) return "codicia";
  return "neutral";
}
function ruleTrend(cr) {
  if (!cr || !cr.btcMA50 || !cr.btcLast) return null;
  const d = pct(cr.btcLast, cr.btcMA50);
  if (d > 2) return "alza";
  if (d < -2) return "baja";
  return "lateral";
}
function ruleInflation(cpi) {
  // cpi: obs mensuales desc. Compara la inflación anual reciente vs. la de hace 6 meses.
  if (!cpi || cpi.length < 19) return null;
  const yoyNow = pct(cpi[0].v, cpi[12].v);
  const yoyPrev = pct(cpi[6].v, cpi[18].v);
  const diff = yoyNow - yoyPrev;
  if (diff > 0.2) return "sube";
  if (diff < -0.2) return "baja";
  return "estable";
}
function ruleFed(ff) {
  // FEDFUNDS mensual desc. Compara tasa actual vs. hace 3 meses.
  if (!ff || ff.length < 4) return null;
  const d = ff[0].v - ff[3].v;
  if (d > 0.1) return "sube";
  if (d < -0.1) return "baja";
  return "estable";
}
function ruleDollar(dxy) {
  // DTWEXBGS diario desc. Compara nivel actual vs. ~20 días hábiles atrás.
  if (!dxy || dxy.length < 21) return null;
  const d = pct(dxy[0].v, dxy[20].v);
  if (d > 1) return "fuerte";
  if (d < -1) return "debil";
  return "neutral";
}
function ruleBanxicoRate(rate) {
  if (!rate || rate.length < 2) return null;
  const last = rate[rate.length - 1].v, prev = rate[0].v; // rango asc: [0] viejo, fin nuevo
  const d = last - prev;
  if (d > 0.1) return "sube";
  if (d < -0.1) return "baja";
  return "estable";
}
function rulePeso(fx) {
  // USD/MXN. Si sube (más pesos por dólar) el peso se DEBILITA.
  if (!fx || fx.length < 21) return null;
  const last = fx[fx.length - 1].v, ref = fx[Math.max(0, fx.length - 21)].v;
  const d = pct(last, ref);
  if (d > 1.5) return "debil";
  if (d < -1.5) return "fuerte";
  return "estable";
}

// ---------- 3. ORQUESTA ----------
async function main() {
  const notes = [];
  const readings = {};
  const auto = {};

  // No requieren llave
  let fg = null, cr = null;
  try { fg = await fetchFearGreed(); } catch (e) { notes.push("Miedo/Codicia falló: " + e.message); }
  try { cr = await fetchCrypto(); } catch (e) { notes.push("Cripto falló: " + e.message); }

  if (fg) { readings.fearGreed = fg.value; readings.fearGreedLabel = fg.label; setAuto(auto, "senti", ruleSentiment(fg)); }
  if (cr) {
    readings.btc = cr.btc; readings.eth = cr.eth; readings.sol = cr.sol;
    readings.btcMA50 = cr.btcMA50 ? Math.round(cr.btcMA50) : null;
    setAuto(auto, "tend", ruleTrend(cr));
  }

  // FRED (EE.UU.)
  if (FRED_KEY) {
    try {
      const [cpi, ff, dxy] = await Promise.all([
        fetchFredSeries("CPIAUCSL", 20), fetchFredSeries("FEDFUNDS", 6), fetchFredSeries("DTWEXBGS", 40)
      ]);
      if (cpi) { readings.cpiYoY = round1(pct(cpi[0].v, cpi[12].v)); setAuto(auto, "infla", ruleInflation(cpi)); }
      if (ff)  { readings.fedRate = ff[0].v; setAuto(auto, "fed", ruleFed(ff)); }
      if (dxy) { readings.dollarIndex = round1(dxy[0].v); setAuto(auto, "dxy", ruleDollar(dxy)); }
    } catch (e) { notes.push("FRED falló: " + e.message); }
  } else notes.push("Sin FRED_KEY: Fed, inflación y dólar quedan en manual.");

  // Banxico (México)
  if (BANXICO_TOKEN) {
    try {
      const [fx, rate] = await Promise.all([fetchBanxico("SF43718"), fetchBanxico("SF61745")]);
      if (fx)   { readings.usdmxn = fx[fx.length - 1].v; setAuto(auto, "mxn", rulePeso(fx)); }
      if (rate) { readings.banxicoRate = rate[rate.length - 1].v; setAuto(auto, "banxico", ruleBanxicoRate(rate)); }
    } catch (e) { notes.push("Banxico falló: " + e.message); }
  } else notes.push("Sin BANXICO_TOKEN: tasa MX y peso quedan en manual.");

  // 4. Calcular señales con el estado auto (lo que no llegó usa su valor por defecto)
  const state = Object.assign(engine.defaults(), auto);
  const markets = engine.compute(state);

  const manualPending = engine.FACTORS.filter(f => !f.auto || auto[f.id] == null).map(f => f.id);

  const out = {
    updatedAt: new Date().toISOString(),
    readings, auto, state, markets,
    manualPending, notes,
    source: "IOS motor Nivel 1 · fuentes gratuitas"
  };
  var json = JSON.stringify(out, null, 2);
  fs.writeFileSync(path.join(__dirname, "data.json"), json);
  // data.js: se carga con <script>, funciona sin servidor (local y en GitHub Pages, sin problemas de CORS).
  fs.writeFileSync(path.join(__dirname, "data.js"), "window.IOS_DATA = " + json + ";\n");
  console.log("data.json y data.js escritos.");
  console.log("Palancas automáticas:", auto);
  console.log("Señales:", Object.keys(markets).map(k => k + ":" + markets[k].signal + "/" + markets[k].riskLevel).join("  "));
  if (notes.length) console.log("Notas:", notes.join(" | "));
}

function setAuto(auto, id, val) { if (val != null) auto[id] = val; }
function round1(x) { return Math.round(x * 10) / 10; }

main().catch(e => { console.error("Motor falló:", e); process.exit(1); });
