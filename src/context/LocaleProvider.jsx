import {  useState } from "react";
import ThemeContext from "./ThemeContext";




const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState("cz");

  const toggleLocale = (locale) => {
    setLocale(locale);
  };

  return (
    <ThemeContext.Provider value={{ locale, toggleLocale }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default LocaleProvider;