import { createContext, useContext } from "react";

// The language is derived from the URL (see langFromPath in src/routes.js), never from browser settings or storage.
const LanguageContext = createContext("tr");

export function LanguageProvider({ lang, children }) {
  return <LanguageContext value={lang}>{children}</LanguageContext>;
}

/** @returns {"tr" | "en"} */
export function useLang() {
  return useContext(LanguageContext);
}
