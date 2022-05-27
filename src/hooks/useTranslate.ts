import en from "../contexts/Localization/locales/en";
import es from "../contexts/Localization/locales/es";
import { useRouter } from "next/router";

export const useTranslate = () => {
  const { locale }: any = useRouter();
  const t = locale === "en" ? en : es;

  return { t };
};
