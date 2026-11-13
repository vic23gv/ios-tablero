window.IOS_DATA = {
  "updatedAt": "2026-11-13T14:03:25.317Z",
  "readings": {
    "fearGreed": 20,
    "fearGreedLabel": "Extreme Fear",
    "btc": 69438,
    "eth": 1964.52,
    "sol": 81.4,
    "btcMA50": 80657,
    "cpiYoY": 4.1,
    "fedRate": 3.88,
    "dollarIndex": 121.9,
    "usdmxn": 18.6188,
    "banxicoRate": 6.25
  },
  "auto": {
    "senti": "miedo",
    "tend": "baja",
    "infla": "estable",
    "fed": "sube",
    "dxy": "neutral",
    "mxn": "estable",
    "banxico": "baja"
  },
  "state": {
    "fed": "sube",
    "infla": "estable",
    "dxy": "neutral",
    "geo": "bajo",
    "senti": "miedo",
    "tend": "baja",
    "banxico": "baja",
    "mxn": "estable",
    "regcripto": "neutral",
    "results": "linea"
  },
  "markets": {
    "CR": {
      "score": -2.7,
      "risk": 4.3,
      "drivers": [
        {
          "label": "Política monetaria de la Fed",
          "w": -2.5
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
      "signal": "VENTA",
      "conv": 45,
      "riskLevel": "ALTO"
    },
    "US": {
      "score": -2,
      "risk": 3.3,
      "drivers": [
        {
          "label": "Política monetaria de la Fed",
          "w": -2
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
      "conv": 33,
      "riskLevel": "MEDIO"
    },
    "MX": {
      "score": -0.19999999999999996,
      "risk": 3.5999999999999996,
      "drivers": [
        {
          "label": "Política monetaria de la Fed",
          "w": -1.5
        },
        {
          "label": "Banxico — tasa en México",
          "w": 1.5
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
