window.IOS_DATA = {
  "updatedAt": "2026-07-14T16:43:45.285Z",
  "readings": {
    "fearGreed": 22,
    "fearGreedLabel": "Extreme Fear",
    "btc": 64792,
    "eth": 1873.54,
    "sol": 77.51,
    "btcMA50": 64588,
    "cpiYoY": 3.7,
    "fedRate": 3.63,
    "dollarIndex": 120.5,
    "usdmxn": 17.5023,
    "banxicoRate": 6.5
  },
  "auto": {
    "senti": "miedo",
    "tend": "lateral",
    "infla": "sube",
    "fed": "estable",
    "dxy": "neutral",
    "mxn": "debil",
    "banxico": "baja"
  },
  "state": {
    "fed": "estable",
    "infla": "sube",
    "dxy": "neutral",
    "geo": "bajo",
    "senti": "miedo",
    "tend": "lateral",
    "banxico": "baja",
    "mxn": "debil",
    "regcripto": "neutral",
    "results": "linea"
  },
  "markets": {
    "CR": {
      "score": -0.7,
      "risk": 3.8,
      "drivers": [
        {
          "label": "Inflación en EE.UU.",
          "w": -1.5
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
      "conv": 12,
      "riskLevel": "ALTO"
    },
    "US": {
      "score": -0.5,
      "risk": 2.8,
      "drivers": [
        {
          "label": "Inflación en EE.UU.",
          "w": -1.5
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
      "conv": 8,
      "riskLevel": "MEDIO"
    },
    "MX": {
      "score": -0.19999999999999996,
      "risk": 3.6,
      "drivers": [
        {
          "label": "Banxico — tasa en México",
          "w": 1.5
        },
        {
          "label": "Peso mexicano (MXN)",
          "w": -1.5
        },
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
          "w": 0.3
        }
      ],
      "signal": "ESPERA",
      "conv": 3,
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
