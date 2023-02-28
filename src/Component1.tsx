import React from "react";
import useLanguage from "./store/hooks/useLanguage";

const Component1 = () => {
  const { lang } = useLanguage();
  return <div>language: {lang}</div>;
};

export default React.memo(Component1);
