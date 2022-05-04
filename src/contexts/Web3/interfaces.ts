export interface IProps {
  children: JSX.Element | JSX.Element[];
}

export interface IWeb3 {
  account?: string;
  network?: any;
  wallet?: any;
  provider?: any;
  providerString?: string;
  chainId?: any;
}
