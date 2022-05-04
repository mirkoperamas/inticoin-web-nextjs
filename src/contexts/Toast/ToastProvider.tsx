import { useEffect, useReducer } from "react";
import { IProps } from "./interfaces";
import { ToastContext } from "./ToastContext";
import { ToastReducer } from "./ToastReducer";

export const ToastProvider = ({ children }: IProps) => {
  const [shows, dispatch] = useReducer(ToastReducer, []);

  const handleAdd = (
    id: number,
    text: string,
    color: string,
    icon: string
  ): void => {
    dispatch({
      type: "add",
      payload: {
        [id]: {
          text,
          color,
          icon,
          status: true,
        },
      },
    });
  };

  const handleRemove = (id: number): void => {
    dispatch({
      type: "remove",
      payload: { id },
    });
  };

  useEffect(() => {
    const array = Object.keys(shows);
    const id: any = array.pop();
    setTimeout(() => {
      dispatch({
        type: "remove",
        payload: { id },
      });
    }, 5000);
  }, [shows]);

  return (
    <ToastContext.Provider value={{ shows, handleAdd, handleRemove }}>
      {children}
    </ToastContext.Provider>
  );
};
