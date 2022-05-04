import { createContext } from "react";
import { AjustContextProps } from "./interfaces";

export const AjustContext = createContext<AjustContextProps>(
  {} as AjustContextProps
);
