window.IOS_DATA = {
  "updatedAt": "2026-08-23T18:30:40.993Z",
  "readings": {
    "fearGreed": 66,
    "fearGreedLabel": "Greed",
    "btc": 77372,
    "eth": 2447.14,
    "sol": 95.36,
    "btcMA50": 65117,
    "cpiYoY": 3.5,
    "fedRate": 3.63,
    "dollarIndex": 118.9,
    "usdmxn": 16.9018,
    "banxicoRate": 6.5
  },
  "auto": {
    "senti": "codicia",
    "tend": "alza",
    "infla": "sube",
    "fed": "estable",
    "dxy": "debil",
    "mxn": "fuerte",
    "banxico": "estable"
  },
  "state": {
    "fed": "estable",
    "infla": "sube",
    "dxy": "debil",
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
      "score": -0.19999999999999996,
      "risk": 3.8,
      "drivers": [
        {
          "label": "Inflación en EE.UU.",
          "w": -1.5
        },
        {
          "label": "Fortaleza del dólar (DXY)",
          "w": 1.5
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
      "conv": 3,
      "riskLevel": "ALTO"
    },
    "US": {
      "score": 0,
      "risk": 2.8,
      "drivers": [
        {
          "label": "Inflación en EE.UU.",
          "w": -1.5
        },
        {
          "label": "Fortaleza del dólar (DXY)",
          "w": 1
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
      "conv": 0,
      "riskLevel": "MEDIO"
    },
    "MX": {
      "score": 2.5,
      "risk": 3.1,
      "drivers": [
        {
          "label": "Fortaleza del dólar (DXY)",
          "w": 1.5
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
      "signal": "COMPRA",
      "conv": 42,
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
