import { TOKEN_ARRAY } from "../config/constants/tokens";
import { PAIRS } from "../config/index";
import { TOKENS } from "../config/index";
import { ITokens } from "../config/constants/tokens";
import { amountBigReverse } from "./bigNumber";
import { IPAIRS } from "../config/constants/pair";
import { combinations } from "./conbinations";

export const getAmountReserves = (
  reserves: any,
  token0: string,
  token1: string,
  amount: string
): any => {
  const filter = TOKEN_ARRAY.filter(
    (arr: string) => token0 !== arr && token1 !== arr && arr
  );
  const combination = combinations(filter);
  const data = getPair(reserves, combination, token0, token1);
  const routes = getRoutes(data, amount);

  let i = 0;
  for (let index = 0; index < routes.length; index++) {
    if (routes[index].recivided > routes[i].recivided) {
      i = index;
    }
  }
  if (routes.length > 0)
    routes[i].recivided =
      routes[i] !== undefined && routes[i]?.recivided.toFixed(6).toString();

  return routes[i];
};

const getPair = (
  reserves: any,
  combination: any,
  token0: string,
  token1: string
): any => {
  const data: any = [];
  combination.map((pairs: any) => {
    const elements: any = {
      element: {},
      bandera: true,
    };
    const tokens = {
      init: "",
      end: "",
    };

    for (let i = 0; i < pairs.length + 1; i++) {
      tokens.init = pairs[0] === pairs[i] ? token0 : tokens.end;
      tokens.end = pairs[i] === undefined ? token1 : pairs[i];
      const resolve = setPair(reserves, i, tokens.init, tokens.end);
      if (!resolve) {
        elements.bandera = false;
        break;
      }
      elements.element = {
        ...elements.element,
        ...resolve,
      };
    }
    elements.bandera && data.push(elements.element);
  });
  data.push(setPair(reserves, 0, token0, token1));
  return data;
};

const setPair = (reserves: any, i: number, init: string, end: string) => {
  const resolve =
    PAIRS[`${init}_${end}` as keyof IPAIRS] !== undefined
      ? PAIRS[`${init}_${end}` as keyof IPAIRS]
      : PAIRS[`${end}_${init}` as keyof IPAIRS];
  return getReserves(reserves, resolve, i, init, end);
};

const getReserves = (
  reserves: any,
  data: any,
  i: number,
  init: string,
  end: string
) => {
  const reserve: any = reserves.filter(
    (r: any) =>
      `${init}_${end}` === r.pair || (`${end}_${init}` === r.pair && r)
  );
  if (data === undefined) return false;
  if (reserve.length === 0) return false;

  return {
    [i]: {
      pair: data,
      reserves0: comprobeReserve(data.token0, init, reserve),
      reserves1: comprobeReserve(data.token0, end, reserve),
      token0: init,
      token1: end,
    },
  };
};

const comprobeReserve = (
  token0Reserve: string,
  token: string,
  reserve: any
) => {
  return token0Reserve.toUpperCase() ===
    TOKENS[token as keyof ITokens].address.toUpperCase()
    ? reserve[0][0]
    : reserve[0][1];
};

const totalInit: any = {
  values: {
    recivided: 0,
    amountFee: 0,
    priceXToken0: 0,
    priceXToken1: 0,
    fee: 0,
    priceImpact: 0,
    route: [],
  },
};

const getRoutes = (data: any, amount: string) => {
  const routes: any = [];
  const total: any = totalInit;

  for (let i = 0; i < data.length; i++) {
    total.values = { ...totalInit };
    total.values.recivided = parseFloat(amount);
    total.values.amountFee = parseFloat(amount);
    total.values.fee = 0;
    total.values.priceImpact = 0;
    total.values.route = [];

    Object.keys(data[i]).map((route: string, index: number) => {
      const reserves0 = amountBigReverse(
        data[i][route].reserves0,
        TOKENS[data[i][route].token0 as keyof ITokens].decimals
      );
      const reserves1 = amountBigReverse(
        data[i][route].reserves1,
        TOKENS[data[i][route].token1 as keyof ITokens].decimals
      );
      total.values.route.push(data[i][route].token0);

      total.values.recivided =
        reserves1 -
        (reserves0 * reserves1) / (reserves0 + total.values.recivided * 0.997);
      total.values.priceXToken0 = total.values.recivided / parseFloat(amount);
      total.values.priceXToken1 =
        1 / total.values.recivided / parseFloat(amount);
      total.values.amountFee = total.values.amountFee * 0.997;
      total.values.fee =
        parseFloat(total.values.fee) + total.values.amountFee * 0.003;
      total.values.priceImpact =
        total.values.priceImpact +
        (1 -
          reserves0 /
            reserves1 /
            ((total.values.recivided * 0.997) /
              (reserves1 -
                (reserves0 * reserves1) /
                  (reserves0 + total.values.recivided * 0.997)))) *
          100;

      if (Object.keys(data[i]).length - 1 === index) {
        total.values.route.push(data[i][route].token1);
        routes.push(total.values);
      }
    });
  }
  return routes;
};
