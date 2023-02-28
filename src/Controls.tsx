import React from "react";
import useLanguage from "./store/hooks/useLanguage";
import useTheme from "./store/hooks/useTheme";

function Controls() {
  const {
    controllers: { toggleTheme },
  } = useTheme();
  const {
    controllers: { toggleLanguage },
  } = useLanguage();

  return (
    <>
      <button onClick={toggleTheme}>Сменить тему</button>
      <button onClick={toggleLanguage}>Сменить язык</button>
    </>
  );
}

export default Controls;
