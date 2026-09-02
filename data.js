window.IOS_DATA = {
  "updatedAt": "2026-09-02T10:48:23.740Z",
  "readings": {
    "fearGreed": 63,
    "fearGreedLabel": "Greed",
    "btc": 76540,
    "eth": 2363.87,
    "sol": 97.99,
    "btcMA50": 68050,
    "cpiYoY": 3.5,
    "fedRate": 3.63,
    "dollarIndex": 118.7,
    "usdmxn": 16.9755,
    "banxicoRate": 6.5
  },
  "auto": {
    "senti": "codicia",
    "tend": "alza",
    "infla": "sube",
    "fed": "estable",
    "dxy": "neutral",
    "mxn": "fuerte",
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
    "mxn": "fuerte",
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
      "score": 1,
      "risk": 3.1,
      "drivers": [
        {
          "label": "Inflación en EE.UU.",
          "w": -1
        },
        {
          "label": "Tendencia técnica del mercado",
          "w": 1
        },
        {
          "label": "Peso mexicano (MXN)",
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
      "conv": 17,
      "riskLevel": "MEDIO"
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
