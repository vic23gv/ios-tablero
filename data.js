window.IOS_DATA = {
  "updatedAt": "2026-09-20T15:36:11.513Z",
  "readings": {
    "fearGreed": 71,
    "fearGreedLabel": "Greed",
    "btc": 80691,
    "eth": 2596.36,
    "sol": 108.1,
    "btcMA50": 72993,
    "cpiYoY": 3.7,
    "fedRate": 3.63,
    "dollarIndex": 118.2,
    "usdmxn": 17.245,
    "banxicoRate": 6.5
  },
  "auto": {
    "senti": "codicia",
    "tend": "alza",
    "infla": "sube",
    "fed": "estable",
    "dxy": "neutral",
    "mxn": "debil",
    "banxico": "estable"
  },
  "state": {
    "fed": "estable",
    "infla": "sube",
    "dxy": "neutral",
    "geo": "bajo",
    "senti": "codicia",
    "tend": "alza",
    "banxico": "estable",
    "mxn": "debil",
    "regcripto": "neutral",
    "results": "linea"
  },
  "markets": {
    "CR": {
      "score": -1.7000000000000002,
      "risk": 3.8,
      "drivers": [
        {
          "label": "Inflación en EE.UU.",
          "w": -1.5
        },
        {
          "label": "Sentimiento (Miedo y Codicia)",
          "w": -1.5
        },
        {
          "label": "Tendencia técnica del mercado",
          "w": 1
        },
        {
          "label": "Riesgo geopolítico",
          "w": 0.3
        }
      ],
      "signal": "ESPERA",
      "conv": 28,
      "riskLevel": "ALTO"
    },
    "US": {
      "score": -1,
      "risk": 2.8,
      "drivers": [
        {
          "label": "Inflación en EE.UU.",
          "w": -1.5
        },
        {
          "label": "Sentimiento (Miedo y Codicia)",
          "w": -1
        },
        {
          "label": "Tendencia técnica del mercado",
          "w": 1
        },
        {
          "label": "Riesgo geopolítico",
          "w": 0.5
        }
      ],
      "signal": "ESPERA",
      "conv": 17,
      "riskLevel": "MEDIO"
    },
    "MX": {
      "score": -1.5,
      "risk": 3.6,
      "drivers": [
        {
          "label": "Peso mexicano (MXN)",
          "w": -1.5
        },
        {
          "label": "Inflación en EE.UU.",
          "w": -1
        },
        {
          "label": "Tendencia técnica del mercado",
          "w": 1
        },
        {
          "label": "Riesgo geopolítico",
          "w": 0.5
        },
        {
          "label": "Sentimiento (Miedo y Codicia)",
          "w": -0.5
        }
      ],
      "signal": "ESPERA",
      "conv": 25,
      "riskLevel": "ALTO"
    }
  },
  "manualPending": [
    "geo",
    "regcripto",
    "results"
  ],
  "notes": [],
  "source": "IOS motor Nivel 1 · fuentes gratuitas"
};
