window.IOS_DATA = {
  "updatedAt": "2026-07-07T22:38:04.858Z",
  "readings": {
    "fearGreed": 27,
    "fearGreedLabel": "Fear",
    "btc": 63558,
    "eth": 1775.83,
    "sol": 80.89,
    "btcMA50": 66429
  },
  "auto": {
    "senti": "miedo",
    "tend": "baja"
  },
  "state": {
    "fed": "estable",
    "infla": "estable",
    "dxy": "neutral",
    "geo": "bajo",
    "senti": "miedo",
    "tend": "baja",
    "banxico": "estable",
    "mxn": "estable",
    "regcripto": "neutral",
    "results": "linea"
  },
  "markets": {
    "CR": {
      "score": -0.19999999999999996,
      "risk": 3.8,
      "drivers": [
        {
          "label": "Tendencia técnica del mercado",
          "w": -1
        },
        {
          "label": "Sentimiento (Miedo y Codicia)",
          "w": 0.5
        },
        {
          "label": "Riesgo geopolítico",
          "w": 0.3
        }
      ],
      "signal": "ESPERA",
      "conv": 3,
      "riskLevel": "ALTO"
    },
    "US": {
      "score": 0,
      "risk": 2.8,
      "drivers": [
        {
          "label": "Tendencia técnica del mercado",
          "w": -1
        },
        {
          "label": "Riesgo geopolítico",
          "w": 0.5
        },
        {
          "label": "Sentimiento (Miedo y Codicia)",
          "w": 0.5
        }
      ],
      "signal": "ESPERA",
      "conv": 0,
      "riskLevel": "MEDIO"
    },
    "MX": {
      "score": -0.19999999999999996,
      "risk": 3.0999999999999996,
      "drivers": [
        {
          "label": "Tendencia técnica del mercado",
          "w": -1
        },
        {
          "label": "Riesgo geopolítico",
          "w": 0.5
        },
        {
          "label": "Sentimiento (Miedo y Codicia)",
          "w": 0.3
        }
      ],
      "signal": "ESPERA",
      "conv": 3,
      "riskLevel": "MEDIO"
    }
  },
  "manualPending": [
    "fed",
    "infla",
    "dxy",
    "geo",
    "banxico",
    "mxn",
    "regcripto",
    "results"
  ],
  "notes": [
    "FRED falló: HTTP 400 en https://api.stlouisfed.org/fred/series/observations?series_id=FEDFUNDS&api_key=703e1ba4a62411c9fbc8e935fa0bcb815e4f2ca1c355adb37a672f25d0c575e7&file_type=json&sort_order=desc&limit=6",
    "Sin BANXICO_TOKEN: tasa MX y peso quedan en manual."
  ],
  "source": "IOS motor Nivel 1 · fuentes gratuitas"
};
