import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  en: {
    /*Navigation*/
    title: "Man Narudon",
    navhome: "Home",

    /*Hero Section*/
    hello: "Hello, I'm a Junior Developer",
    herodesc: "I build modern web applications with Tailwind CSS",
    /*Projects Section*/
    project: "My Projects",
    /*About Section*/

    /*Contact Section*/

    /*all sections*/
    contact: "Contact",
    about: "About Me",
  },
  th: {
    /*Navigation*/
    title: "แมน นฤดล",
    navhome: "หน้าแรก",
    /*Hero Section*/
    hello: "สวัสดี ผมเป็นนักพัฒนาเว็บมือใหม่",
    herodesc: "ฉันสร้างแอปพลิเคชันเว็บที่ทันสมัยด้วย Tailwind CSS",
    /*Projects Section*/
    project: "โปรเจคของผม",
    /*About Section*/

    /*Contact Section*/

    /*all sections*/
    contact: "ติดต่อ",
    about: "เกี่ยวกับ",
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "th" : "en"));
  };

  return (
    <LanguageContext.Provider
      value={{ lang, toggleLanguage, t: translations[lang] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
