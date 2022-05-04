import { useContext } from "react";
import { ToastContext } from "../contexts/Toast/ToastContext";

export const useToast = () => {
  const { handleAdd } = useContext(ToastContext);

  const message = (
    action: string,
    id: string,
    type = true,
    value = ""
  ): void => {
    switch (action) {
      case "warning":
        handleAdd(new Date().getTime(), id, "#f1c40f", "warning");
        break;

      case "danger":
        handleAdd(new Date().getTime(), id, "#e74c3c", "warning");
        break;

      case "success":
        handleAdd(new Date().getTime(), id, "#07bc0c", "success");
        break;

      case "info":
        handleAdd(new Date().getTime(), id, "#3498db", "info");
        break;
      default:
        break;
    }
  };

  const intlApi = (id: string) => {
    return id;
  };

  return { message, intlApi };
};
