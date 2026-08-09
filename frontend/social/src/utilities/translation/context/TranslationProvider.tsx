import { useSelector } from "react-redux";
import type { ReactNode } from "react";
import { TranslationContext, type TranslationMap } from "./TranslationContext";
import type { RootState } from "../../../store/store";

export function TranslationProvider({ children }: { children: ReactNode }) {
  const lang = useSelector((state: RootState) => state.languageSlice.lang);

  const t = (text: TranslationMap) => {
    return text[lang] ?? text.sv ?? "";
  };

  return (
    <TranslationContext.Provider value={{ t }}>
      {children}
    </TranslationContext.Provider>
  );
}
