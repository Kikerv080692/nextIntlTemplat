"use client";
import { createContext, useContext, useState, useEffect } from "react";

export const LocaleContext = createContext();

export function LocaleProvider({ children, defaultLocale = "cz" }) {
  const [locale, setLocale] = useState(defaultLocale);
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    async function loadMessages() {
      try {
        const res = await fetch(`/locales/${locale}/translation.json`);
        const data = await res.json();
        setMessages({ translation: data });
      } catch (e) {
        console.error("Load failed", e);
      }
    }
    loadMessages();
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, messages }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useClientLocale() {
  return useContext(LocaleContext);
}
