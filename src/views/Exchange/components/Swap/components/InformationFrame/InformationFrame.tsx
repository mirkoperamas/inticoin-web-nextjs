import classes from "./information-frame.module.scss";
import { ISwapValues } from "../../interfaces";
import { IID } from "../../Row/interfaces";

type IInformationFrame = {
  slipage: number;
  priceImpact: number;
  fee: number;
  coinValue: IID;
  values: ISwapValues;
};

export const InformationFrame = ({
  priceImpact,
  fee,
  slipage,
  coinValue,
  values,
}: IInformationFrame) => {
  return (
    <div className={classes.informationFrame}>
      <div>
        <p>Minimo recibido:</p>
        <span>
          {values.token1 != ""
            ? parseFloat(values.token1) -
              parseFloat(values.token1) * (slipage / 1000)
            : 0}{" "}
          {coinValue.selected}
        </span>
      </div>
      <hr />
      <div>
        <p>Impacto Precio:</p>
        <span>{priceImpact === undefined ? 0 : priceImpact.toFixed(2)}%</span>
      </div>
      <hr />
      <div>
        <p>Tarifa proveedor liquidez:</p>
        <span>{fee === undefined ? 0 : fee.toFixed(3)} Firu </span>
      </div>
      <hr />
    </div>
  );
};

/**
 * token_a_pool_size * token_b_pool_size = constant_product
 * USDC = 2,000,000
 * ETH = 1,000
 * Constant Product = 2,000,000,000
 * Market Price = 2,000
 * 
 * USDC = 2,010,000 (because we added 10,000 to the pool)
 * constant Product = 2,000,000,000 (stays the same)
 * ETH = 995.024 (constant product / new usdc amount =   2,000,000,000 / 2,010,000)
 * 
 * ETH recieved = 4.976 (old eth amount - new eth amount  = 1000 - 995.024)
 * Price paid per ETH = 2009.64 USDC  (10000 / 4.976)
 * 
 * Price impact F = (1-(Price paid per ETH / Market Price))*100)
 * Price impact = 0.48% (( 1 - (2000 / 2009.64)*100)
 * 
 * INFO:
    https://dailydefi.org/articles/price-impact-and-how-to-calculate/
    https://ethereum.stackexchange.com/questions/102063/understand-price-impact-and-liquidity-in-pancakeswap
 */
