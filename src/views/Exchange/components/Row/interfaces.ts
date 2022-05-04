import { ChangeEvent } from "react";
import { ISwapValues } from "../interfaces";

export interface IID {
  id: string;
  icon: string;
  description: string;
  filter: string[];
  balance: number;
  selected: string;
}

export interface IRowI {
  FIRU: IID;
  MOVR: IID;
  USDC: IID;
}

export interface IRow {
  id: number;
  values: ISwapValues;
  handleFormChange: ({ target }: ChangeEvent<HTMLInputElement>) => void;
  coins: IRowI;
  coinValue: IID;
  coin: IID;
  balance?: number;
  setBalance?: (balance: number) => void;
  handleSwapState?: (data: any, reset?: boolean) => void;
  handleSwapChange: (newValues: IID, selected: string) => void;
  setValues: (values: any) => void;
  setRoute: (route: any) => void;
  reserves: any;
}

export interface IModal {
  handleClose: () => void;
  handleSwapChange: (newValues: IID, selected: string) => void;
  coins: IRowI;
  filter: string[];
}

export interface ICoin {
  id: number;
  coin: IID;
  selected?: string;
  handleClose: () => void;
  handleSwapChange: (newValues: IID, selected: string) => void;
}
