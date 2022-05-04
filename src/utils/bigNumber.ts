import Web3 from "web3";
const web3 = new Web3();

export const amountMax =
  "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";

export const amountBig = (amount: string, decimals: number) => {
  const resolve =
    decimals === 18
      ? web3.utils.toWei(amount, "ether")
      : parseInt(amount) * Number(`1e+${decimals}`);
  return resolve;
};

export const amountBigReverse = (amount: string, decimals: number): number => {
  const resolve = parseInt(amount) / Number(`1e+${decimals}`);
  return resolve;
};
