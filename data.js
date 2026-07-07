window.IOS_DATA = {
  "updatedAt": "2026-07-07T22:27:44.647Z",
  "readings": {
    "fearGreed": 27,
    "fearGreedLabel": "Fear",
    "btc": 63385,
    "eth": 1770.06,
    "sol": 80.77,
    "btcMA50": 66425
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
    "Sin FRED_KEY: Fed, inflación y dólar quedan en manual.",
    "Sin BANXICO_TOKEN: tasa MX y peso quedan en manual."
  ],
  "source": "IOS motor Nivel 1 · fuentes gratuitas"
};
