/* =====================================================================
 * IOS · engine.js  — El cerebro compartido (mismo código en la nube y en el navegador)
 * Define los mercados, los factores con sus pesos, y la función compute()
 * que convierte el estado del mundo en señales Compra/Espera/Venta + riesgo.
 * ===================================================================== */
(function (root, factory) {
  if (typeof module !== "undefined" && module.exports) module.exports = factory();
  else root.IOS_ENGINE = factory();
})(typeof self !== "undefined" ? self : this, function () {

  var MARKETS = [
    { k: "CR", name: "Cripto", sub: "BTC · ETH · altcoins", reg: "No regulado", base: 2.0 },
    { k: "US", name: "Acciones / ETFs EE.UU.", sub: "S&P 500 · Nasdaq", reg: "Regulado", base: 1.0 },
    { k: "MX", name: "Bolsa Mexicana (BMV)", sub: "IPC · acciones MX", reg: "Regulado", base: 1.3 }
  ];

  // scope = a qué mercados aplica. auto = true si el motor puede llenarlo con datos.
  var FACTORS = [
    { id: "fed", group: "Global · macro y política monetaria", label: "Política monetaria de la Fed",
      help: "Dirección de las tasas de interés en EE.UU.", scope: ["CR","US","MX"], auto: true, opts: [
      { v: "baja",    t: "Baja tasas (expansiva)",  imp: { US: 2, CR: 2, MX: 1.5 } },
      { v: "estable", t: "Estable / en pausa",       imp: {} },
      { v: "sube",    t: "Sube tasas (restrictiva)", imp: { US: -2, CR: -2.5, MX: -1.5 }, risk: 0.5 }
    ], def: "estable" },
    { id: "infla", group: "Global · macro y política monetaria", label: "Inflación en EE.UU.",
      help: "Tendencia del índice de precios (CPI).", scope: ["CR","US","MX"], auto: true, opts: [
      { v: "baja",    t: "Bajando (se enfría)",   imp: { US: 1.5, CR: 1, MX: 1 } },
      { v: "estable", t: "Estable",                imp: {} },
      { v: "sube",    t: "Subiendo (se calienta)", imp: { US: -1.5, CR: -1.5, MX: -1 }, risk: 0.3 }
    ], def: "estable" },
    { id: "dxy", group: "Global · macro y política monetaria", label: "Fortaleza del dólar (DXY)",
      help: "Un dólar fuerte drena capital de activos de riesgo y emergentes.", scope: ["CR","US","MX"], auto: true, opts: [
      { v: "debil",   t: "Débil / depreciándose",  imp: { US: 1, CR: 1.5, MX: 1.5 } },
      { v: "neutral", t: "Neutral",                 imp: {} },
      { v: "fuerte",  t: "Fuerte / apreciándose",   imp: { US: -0.5, CR: -1.5, MX: -2 }, risk: 0.3 }
    ], def: "neutral" },
    { id: "geo", group: "Global · política y sociedad", label: "Riesgo geopolítico",
      help: "Guerras, conflictos, tensiones comerciales, elecciones clave.", scope: ["CR","US","MX"], auto: false, opts: [
      { v: "bajo",  t: "Bajo / estable",  imp: { US: 0.5, CR: 0.3, MX: 0.5 } },
      { v: "medio", t: "Medio / tensión",  imp: {}, risk: 1 },
      { v: "alto",  t: "Alto / crisis",   imp: { US: -1.5, CR: -1, MX: -1.5 }, risk: 2 }
    ], def: "bajo" },
    { id: "senti", group: "Global · política y sociedad", label: "Sentimiento (Miedo y Codicia)",
      help: "El humor social del mercado. Los extremos suelen anticipar giros.", scope: ["CR","US","MX"], auto: true, opts: [
      { v: "miedo",   t: "Miedo extremo (contrarian +)", imp: { US: 0.5, CR: 0.5, MX: 0.3 }, risk: 1.5 },
      { v: "neutral", t: "Neutral",                       imp: {} },
      { v: "codicia", t: "Codicia extrema (burbuja)",     imp: { US: -1, CR: -1.5, MX: -0.5 }, risk: 1.5 }
    ], def: "neutral" },
    { id: "tend", group: "Global · política y sociedad", label: "Tendencia técnica del mercado",
      help: "Precio por encima o por debajo de sus promedios de largo plazo.", scope: ["CR","US","MX"], auto: true, opts: [
      { v: "alza",    t: "Alcista",  imp: { US: 1, CR: 1, MX: 1 } },
      { v: "lateral", t: "Lateral",  imp: {} },
      { v: "baja",    t: "Bajista",  imp: { US: -1, CR: -1, MX: -1 }, risk: 0.3 }
    ], def: "lateral" },
    { id: "banxico", group: "Específicos por mercado", label: "Banxico — tasa en México",
      help: "Afecta directamente a la Bolsa Mexicana (BMV).", scope: ["MX"], auto: true, opts: [
      { v: "baja",    t: "Baja tasas", imp: { MX: 1.5 } },
      { v: "estable", t: "Estable",    imp: {} },
      { v: "sube",    t: "Sube tasas", imp: { MX: -1 } }
    ], def: "estable" },
    { id: "mxn", group: "Específicos por mercado", label: "Peso mexicano (MXN)",
      help: "Un peso débil golpea a la BMV medida en dólares.", scope: ["MX"], auto: true, opts: [
      { v: "fuerte",  t: "Fuerte / apreciándose", imp: { MX: 1 } },
      { v: "estable", t: "Estable",               imp: {} },
      { v: "debil",   t: "Débil / depreciándose", imp: { MX: -1.5 }, risk: { MX: 0.5 } }
    ], def: "estable" },
    { id: "regcripto", group: "Específicos por mercado", label: "Regulación de criptomonedas",
      help: "Aprobaciones (ETF) o prohibiciones mueven fuerte al mercado cripto.", scope: ["CR"], auto: false, opts: [
      { v: "favorable", t: "Favorable (ETF, adopción)", imp: { CR: 2 } },
      { v: "neutral",   t: "Neutral",                    imp: {} },
      { v: "hostil",    t: "Hostil (prohibiciones)",     imp: { CR: -2.5 }, risk: { CR: 1.5 } }
    ], def: "neutral" },
    { id: "results", group: "Específicos por mercado", label: "Resultados corporativos EE.UU.",
      help: "Temporada de reportes de utilidades (earnings).", scope: ["US"], auto: false, opts: [
      { v: "mejor", t: "Mejores de lo esperado", imp: { US: 1.5 } },
      { v: "linea", t: "En línea",               imp: {} },
      { v: "peor",  t: "Peores de lo esperado",   imp: { US: -1.5 }, risk: { US: 0.3 } }
    ], def: "linea" }
  ];

  function optionOf(f, v) {
    for (var i = 0; i < f.opts.length; i++) if (f.opts[i].v === v) return f.opts[i];
    return null;
  }

  // state = { factorId: optionValue }. Devuelve señales por mercado.
  function compute(state) {
    var res = {};
    MARKETS.forEach(function (m) { res[m.k] = { score: 0, risk: m.base, drivers: [] }; });
    FACTORS.forEach(function (f) {
      var opt = optionOf(f, state[f.id] != null ? state[f.id] : f.def);
      if (!opt) return;
      f.scope.forEach(function (k) {
        var v = opt.imp[k] || 0;
        if (v !== 0) { res[k].score += v; res[k].drivers.push({ label: f.label, w: v }); }
      });
      if (opt.risk != null) {
        if (typeof opt.risk === "number") f.scope.forEach(function (k) { res[k].risk += opt.risk; });
        else for (var kk in opt.risk) if (res[kk]) res[kk].risk += opt.risk[kk];
      }
    });
    MARKETS.forEach(function (m) {
      var r = res[m.k];
      r.signal = r.score > 2 ? "COMPRA" : (r.score < -2 ? "VENTA" : "ESPERA");
      r.conv = Math.min(100, Math.round(Math.abs(r.score) / 6 * 100));
      r.riskLevel = r.risk <= 1.8 ? "BAJO" : (r.risk <= 3.3 ? "MEDIO" : "ALTO");
      r.drivers.sort(function (a, b) { return Math.abs(b.w) - Math.abs(a.w); });
    });
    return res;
  }

  function defaults() { var s = {}; FACTORS.forEach(function (f) { s[f.id] = f.def; }); return s; }

  return { MARKETS: MARKETS, FACTORS: FACTORS, compute: compute, defaults: defaults };
});
