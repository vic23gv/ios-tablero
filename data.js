window.IOS_DATA = {
  "updatedAt": "2026-10-22T03:39:19.292Z",
  "readings": {
    "fearGreed": 68,
    "fearGreedLabel": "Greed",
    "btc": 82687,
    "eth": 2435.38,
    "sol": 105.18,
    "btcMA50": 81727,
    "usdmxn": 18.6425,
    "banxicoRate": 6.5
  },
  "auto": {
    "senti": "codicia",
    "tend": "lateral",
    "mxn": "debil",
    "banxico": "estable"
  },
  "state": {
    "fed": "estable",
    "infla": "estable",
    "dxy": "neutral",
    "geo": "bajo",
    "senti": "codicia",
    "tend": "lateral",
    "banxico": "estable",
    "mxn": "debil",
    "regcripto": "neutral",
    "results": "linea"
  },
  "markets": {
    "CR": {
      "score": -1.2,
      "risk": 3.5,
      "drivers": [
        {
          "label": "Sentimiento (Miedo y Codicia)",
          "w": -1.5
        },
        {
          "label": "Riesgo geopolítico",
          "w": 0.3
        }
      ],
      "signal": "ESPERA",
      "conv": 20,
      "riskLevel": "ALTO"
    },
    "US": {
      "score": -0.5,
      "risk": 2.5,
      "drivers": [
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
      "conv": 8,
      "riskLevel": "MEDIO"
    },
    "MX": {
      "score": -1.5,
      "risk": 3.3,
      "drivers": [
        {
          "label": "Peso mexicano (MXN)",
          "w": -1.5
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
      "riskLevel": "MEDIO"
    }
  },
  "manualPending": [
    "fed",
    "infla",
    "dxy",
    "geo",
    "regcripto",
    "results"
  ],
  "notes": [
    "FRED falló: Unexpected token '<', \"<!doctype \"... is not valid JSON"
  ],
  "source": "IOS motor Nivel 1 · fuentes gratuitas"
};
