# IOS · Sistema Operativo de Inversión — versión automática (Nivel 1)

Tablero web que genera señales **Compra / Espera / Venta** con **riesgo Alto/Medio/Bajo**
para **Cripto, EE.UU. y BMV**, alimentado solo por datos públicos gratuitos que se
actualizan cada 6 horas. Todo gratis. No es asesoría financiera.

---

## Qué hay en esta carpeta

| Archivo | Qué es |
|---|---|
| `index.html` | El tablero que ves y usas. |
| `engine.js` | El "cerebro": factores, pesos y cálculo de señales. |
| `fetch-data.js` | El "motor": jala datos, aplica reglas y escribe `data.js`. |
| `data.js` / `data.json` | Los datos ya calculados que lee el tablero (el motor los reescribe). |
| `.github/workflows/update.yml` | El "reloj": corre el motor cada 6 h en la nube. |

## Probarlo YA en tu compu (sin instalar nada)

Abre **`index.html`** con doble clic. Funciona con los datos de muestra incluidos.
(La etiqueta *"datos de muestra"* desaparece cuando ya corre en la nube con datos frescos.)

---

## Publicarlo gratis en 5 pasos (GitHub)

> Necesitas una cuenta de **GitHub** (gratis). Todo se hace desde el navegador, sin comandos.

1. **Crea el repositorio.** En GitHub → *New repository* → nombre p.ej. `ios-tablero`
   → **Public** → *Create*.
2. **Sube los archivos.** En el repo → *Add file → Upload files* → arrastra TODO el
   contenido de esta carpeta (incluida la carpeta `.github`) → *Commit changes*.
3. **Enciende la página (GitHub Pages).** *Settings → Pages →* en *Source* elige
   **Deploy from a branch**, rama `main`, carpeta `/ (root)` → *Save*. En 1–2 min te da
   una URL tipo `https://tu-usuario.github.io/ios-tablero/`. Esa es tu tablero.
4. **Enciende el reloj.** Pestaña *Actions* → si pide confirmar, *"I understand, enable"*
   → abre el workflow **Actualizar señales IOS** → *Run workflow* (para probarlo ya).
5. **(Opcional) Agrega las llaves gratis** para llenar 5 palancas más (Fed, inflación,
   dólar, tasa MX, peso). Ver abajo. Sin ellas, el sistema funciona igual con
   cripto + sentimiento + tendencia.

Listo: cada 6 horas el reloj actualiza tu tablero solo. Para verlo al momento, usa
*Run workflow* cuando quieras.

---

## Llaves gratuitas (opcionales)

Se guardan **ocultas** en el repo (*Settings → Secrets and variables → Actions → New
repository secret*). Nunca se ven en la página.

| Secret | De dónde sacarla (gratis, instantáneo) | Para qué |
|---|---|---|
| `FRED_KEY` | https://fredaccount.stlouisfed.org/apirequest/ | Tasa Fed, inflación (CPI), dólar (DXY) |
| `BANXICO_TOKEN` | https://www.banxico.org.mx/SieAPIRest/service/v1/token | Tasa de México y peso (USD/MXN) |

---

## Palancas: automáticas vs. manuales

**Automáticas** (las llena el motor): Sentimiento (Miedo/Codicia), Tendencia, y —con
llaves— Fed, Inflación, Dólar, Banxico, Peso.

**Manuales** (las pones tú en el tablero, ningún número gratis las captura bien):
Riesgo geopolítico, Regulación cripto, Resultados corporativos. En el tablero puedes
**anular a mano cualquier palanca** y recalcula al instante; el botón *"Volver a datos
automáticos"* restaura la lectura del motor.

---

## Notas honestas

- La página de GitHub Pages es **pública** (cualquiera con el link la ve). No expone tus
  llaves —esas viven ocultas en la nube—. Para un tablero personal está bien.
- El reloj usa horario **UTC**. `0 */6 * * *` = 00, 06, 12, 18 UTC.
- Costo: **$0** dentro de las capas gratuitas de GitHub y de las APIs.
- Automatizar hace el sistema más cómodo, **no más adivino**. La calidad de la señal
  depende del modelo (los pesos de `engine.js`), que puedes seguir afinando.
