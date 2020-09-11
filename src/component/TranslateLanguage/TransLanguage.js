import React, { createContext, useContext, useState } from "react";

import { languageOptions, dictionaryList } from "../Language/languageOption";

export const LanguageContext = createContext({
  userLanguage: "en",
  dictionary: dictionaryList.en,
});

export function LanguageProvider({ children }) {
  const [userLanguage, setUserLanguage] = useState("en");

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: (selected) => {
      const newLanguage = languageOptions[selected] ? selected : "en";
      setUserLanguage(newLanguage);
      window.localStorage.setItem("language-now", newLanguage);
    },
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
}

export function pathText(path, text) {
  let newpath = path.split(".");
  let current = text;
  for (let i = 0; i < newpath.length; i++) {
    if(current[newpath[i]]!==undefined){
      current=current[newpath[i]]
    } else{
      return undefined;
    }
  }
  return current;
}

export function Text(key) {
  const languageContext = useContext(LanguageContext);
  return pathText(key, languageContext.dictionary);
}
