window.IOS_DATA = {
  "updatedAt": "2026-07-10T11:23:45.376Z",
  "readings": {
    "fearGreed": 23,
    "fearGreedLabel": "Extreme Fear",
    "btc": 64338,
    "eth": 1796.03,
    "sol": 79.34,
    "btcMA50": 65613,
    "cpiYoY": 4.3,
    "fedRate": 3.63,
    "dollarIndex": 120.7,
    "usdmxn": 17.535,
    "banxicoRate": 6.5
  },
  "auto": {
    "senti": "miedo",
    "tend": "lateral",
    "infla": "sube",
    "fed": "estable",
    "dxy": "fuerte",
    "mxn": "estable",
    "banxico": "baja"
  },
  "state": {
    "fed": "estable",
    "infla": "sube",
    "dxy": "fuerte",
    "geo": "bajo",
    "senti": "miedo",
    "tend": "lateral",
    "banxico": "baja",
    "mxn": "estable",
    "regcripto": "neutral",
    "results": "linea"
  },
  "markets": {
    "CR": {
      "score": -2.2,
      "risk": 4.1,
      "drivers": [
        {
          "label": "Inflación en EE.UU.",
          "w": -1.5
        },
        {
          "label": "Fortaleza del dólar (DXY)",
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
      "signal": "VENTA",
      "conv": 37,
      "riskLevel": "ALTO"
    },
    "US": {
      "score": -1,
      "risk": 3.1,
      "drivers": [
        {
          "label": "Inflación en EE.UU.",
          "w": -1.5
        },
        {
          "label": "Fortaleza del dólar (DXY)",
          "w": -0.5
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
      "conv": 17,
      "riskLevel": "MEDIO"
    },
    "MX": {
      "score": -0.7000000000000002,
      "risk": 3.4000000000000004,
      "drivers": [
        {
          "label": "Fortaleza del dólar (DXY)",
          "w": -2
        },
        {
          "label": "Banxico — tasa en México",
          "w": 1.5
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
      "conv": 12,
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
