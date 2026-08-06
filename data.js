window.IOS_DATA = {
  "updatedAt": "2026-08-06T10:14:29.878Z",
  "readings": {
    "fearGreed": 25,
    "fearGreedLabel": "Extreme Fear",
    "btc": 64532,
    "eth": 1901.3,
    "sol": 73.12,
    "btcMA50": 63271,
    "cpiYoY": 3.7,
    "fedRate": 3.63,
    "dollarIndex": 119.7,
    "usdmxn": 17.2317,
    "banxicoRate": 6.5
  },
  "auto": {
    "senti": "miedo",
    "tend": "lateral",
    "infla": "sube",
    "fed": "estable",
    "dxy": "neutral",
    "mxn": "fuerte",
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
    "mxn": "fuerte",
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
      "score": 2.3,
      "risk": 3.1,
      "drivers": [
        {
          "label": "Banxico — tasa en México",
          "w": 1.5
        },
        {
          "label": "Inflación en EE.UU.",
          "w": -1
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
          "w": 0.3
        }
      ],
      "signal": "COMPRA",
      "conv": 38,
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
