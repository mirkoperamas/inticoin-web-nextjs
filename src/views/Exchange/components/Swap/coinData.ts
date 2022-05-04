export const coins = {
  FIRU: {
    id: "FIRU",
    icon: "/img/coin/firu.png",
    description: "Firulaix",
    filter: ["MOVR", "USDC"],
    balance: 0,
    selected: "MOVR",
  },
  MOVR: {
    id: "MOVR",
    icon: "/img/coin/movr.png",
    description: "Moonriver",
    filter: ["FIRU"],
    balance: 0,
    selected: "FIRU",
  },
  USDC: {
    id: "USDC",
    icon: "/img/coin/usdc.png",
    description: "USD Coin",
    filter: ["FIRU"],
    balance: 0,
    selected: "FIRU",
  },
};
