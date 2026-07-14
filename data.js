window.IOS_DATA = {
  "updatedAt": "2026-07-14T07:24:42.049Z",
  "readings": {
    "fearGreed": 22,
    "fearGreedLabel": "Extreme Fear",
    "btc": 62508,
    "eth": 1780.63,
    "sol": 74.97,
    "btcMA50": 64543,
    "cpiYoY": 4.3,
    "fedRate": 3.63,
    "dollarIndex": 120.5,
    "usdmxn": 17.5023,
    "banxicoRate": 6.5
  },
  "auto": {
    "senti": "miedo",
    "tend": "baja",
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
    "tend": "baja",
    "banxico": "baja",
    "mxn": "debil",
    "regcripto": "neutral",
    "results": "linea"
  },
  "markets": {
    "CR": {
      "score": -1.7,
      "risk": 4.1,
      "drivers": [
        {
          "label": "Inflación en EE.UU.",
          "w": -1.5
        },
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
      "conv": 28,
      "riskLevel": "ALTO"
    },
    "US": {
      "score": -1.5,
      "risk": 3.0999999999999996,
      "drivers": [
        {
          "label": "Inflación en EE.UU.",
          "w": -1.5
        },
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
      "conv": 25,
      "riskLevel": "MEDIO"
    },
    "MX": {
      "score": -1.2,
      "risk": 3.9,
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
      "conv": 20,
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
