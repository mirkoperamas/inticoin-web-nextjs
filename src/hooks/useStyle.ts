import { useContext } from "react";
import { AjustContext } from "../contexts/Ajust/AjustContext";

export const useStyle = () => {
  const { ajust } = useContext(AjustContext);

  const backgroundImg = (data: string): object => {
    return {
      url: `${data}`,
    };
  };

  const border = (
    t = 0,
    r = 0,
    b = 0,
    l = 0,
    color = "#000",
    style = "solid"
  ): object => {
    return {
      borderTop: `${
        ajust.height / t !== Infinity ? ajust.height / t : 0.1
      }px px  ${style} ${color}`,
      borderRight: `${
        ajust.height / r !== Infinity ? ajust.height / r : 0.1
      }px   ${style} ${color}`,
      borderBottom: `${
        ajust.height / b !== Infinity ? ajust.height / b : 0.1
      }px   ${style} ${color}`,
      borderLeft: `${
        ajust.height / l !== Infinity ? ajust.height / l : 0.1
      }px  ${style} ${color}`,
    };
  };
  const borderRadius = (value = 0) => {
    return {
      borderRadius: `${ajust.height / value ?? 0}px `,
    };
  };

  const fontSize = (value: number): object => {
    return {
      fontSize: `${ajust.height / value ?? 0}px`,
    };
  };

  const height = (value: number) => {
    return {
      height: `${ajust.height / value ?? 0}px`,
    };
  };

  const lineHeight = (value: number) => {
    return {
      lineHeight: `${ajust.height / value ?? 0}px`,
    };
  };

  const margin = (t = 0, r = 0, b = 0, l = 0): object => {
    return {
      margin: `
				${ajust.height / t !== Infinity ? ajust.height / t : 0.1}px 
				${ajust.height / r !== Infinity ? ajust.height / r : 0.1}px 
				${ajust.height / b !== Infinity ? ajust.height / b : 0.1}px 
				${ajust.height / l !== Infinity ? ajust.height / l : 0.1}px`,
    };
  };

  const padding = (t = 0, r = 0, b = 0, l = 0): object => {
    return {
      padding: `
			${ajust.height / t !== Infinity ? ajust.height / t : 0.1}px 
			${ajust.height / r !== Infinity ? ajust.height / r : 0.1}px 
			${ajust.height / b !== Infinity ? ajust.height / b : 0.1}px 
			${ajust.height / l !== Infinity ? ajust.height / l : 0.1}px`,
    };
  };

  const textShadow = (x = 0, y = 0, b = 0, c = "#000"): object => {
    return {
      textShadow: `
			${ajust.height / x !== Infinity ? ajust.height / x : 0.1}px 
			${ajust.height / y !== Infinity ? ajust.height / y : 0.1}px 
			${ajust.height / b !== Infinity ? ajust.height / b : 0.1}px 
			${c}`,
    };
  };
  const WebkitTextStroke = (x = 0, c = "#000"): object => {
    return {
      WebkitTextStroke: `
				${ajust.height / x ?? 0}px 
				${c}`,
    };
  };

  const width = (value: number) => {
    return {
      width: `${ajust.height / value ?? 0}px`,
    };
  };

  return {
    backgroundImg,
    border,
    borderRadius,
    fontSize,
    height,
    lineHeight,
    margin,
    padding,
    textShadow,
    WebkitTextStroke,
    width,
  };
};
