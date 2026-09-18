window.IOS_DATA = {
  "updatedAt": "2026-09-18T03:37:56.512Z",
  "readings": {
    "fearGreed": 56,
    "fearGreedLabel": "Greed",
    "btc": 77345,
    "eth": 2472.43,
    "sol": 104.17,
    "btcMA50": null,
    "cpiYoY": 3.7,
    "fedRate": 3.63,
    "dollarIndex": 118.2,
    "usdmxn": 17.1872,
    "banxicoRate": 6.5
  },
  "auto": {
    "senti": "codicia",
    "infla": "sube",
    "fed": "estable",
    "dxy": "neutral",
    "mxn": "estable",
    "banxico": "estable"
  },
  "state": {
    "fed": "estable",
    "infla": "sube",
    "dxy": "neutral",
    "geo": "bajo",
    "senti": "codicia",
    "tend": "lateral",
    "banxico": "estable",
    "mxn": "estable",
    "regcripto": "neutral",
    "results": "linea"
  },
  "markets": {
    "CR": {
      "score": -2.7,
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
          "label": "Riesgo geopolítico",
          "w": 0.3
        }
      ],
      "signal": "VENTA",
      "conv": 45,
      "riskLevel": "ALTO"
    },
    "US": {
      "score": -2,
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
          "label": "Riesgo geopolítico",
          "w": 0.5
        }
      ],
      "signal": "ESPERA",
      "conv": 33,
      "riskLevel": "MEDIO"
    },
    "MX": {
      "score": -1,
      "risk": 3.1,
      "drivers": [
        {
          "label": "Inflación en EE.UU.",
          "w": -1
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
    "tend",
    "regcripto",
    "results"
  ],
  "notes": [],
  "source": "IOS motor Nivel 1 · fuentes gratuitas"
};
