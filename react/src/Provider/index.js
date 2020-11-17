import React, { createContext, useContext } from "react";

// создаем контекст
const LangContext = createContext({ lang: {} });

// создаем провайдер
const LangProvider = ({ children }) => {
  const value = { lang: "ru" };
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

// создаем хук для получения контекста
const useLang = () => {
  const { lang } = useContext(LangContext);

  return lang;
};

const Component = () => {
  const lang = useLang();

  return <p>Текущий язык - {lang}</p>;
};

const App = () => {
  return (
    <LangProvider>
      <Component />
    </LangProvider>
  );
};

export const Provider = () => {
  return <App />;
};
