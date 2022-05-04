import { useEffect, useState } from "react";
import { IProps, IAjust } from "./interfaces";
import { AjustContext } from "./AjustContext";

const INIT_STATE: IAjust = {
  height: 0,
};

export const AjustProvider = ({ children }: IProps) => {
  const [ajust, setAjust] = useState(INIT_STATE);

  const resolution = () =>
    setAjust({ height: window.visualViewport.width / 1.78 });

  useEffect(() => {
    setAjust({ height: window.visualViewport.width / 1.78 });
    window.addEventListener("resize", resolution);
    return () => {
      window.removeEventListener("resize", resolution);
    };
  }, []);

  return (
    <AjustContext.Provider value={{ ajust }}>{children}</AjustContext.Provider>
  );
};
