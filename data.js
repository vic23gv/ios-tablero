window.IOS_DATA = {
  "updatedAt": "2026-11-11T13:42:06.315Z",
  "readings": {
    "fearGreed": 29,
    "fearGreedLabel": "Fear",
    "btc": 73649,
    "eth": 2048.57,
    "sol": 84.04,
    "btcMA50": 81235,
    "cpiYoY": 4.1,
    "fedRate": 3.88,
    "dollarIndex": 121.9,
    "usdmxn": 18.6678,
    "banxicoRate": 6.25
  },
  "auto": {
    "senti": "miedo",
    "tend": "baja",
    "infla": "estable",
    "fed": "sube",
    "dxy": "neutral",
    "mxn": "debil",
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
    "mxn": "debil",
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
      "score": -1.7,
      "risk": 4.1,
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
          "label": "Peso mexicano (MXN)",
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
          "w": 0.3
        }
      ],
      "signal": "ESPERA",
      "conv": 28,
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
