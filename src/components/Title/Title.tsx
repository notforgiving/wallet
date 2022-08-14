import React, { FC, ReactNode } from "react";
import css from "./styles.module.scss";

const Title: FC<{ children: ReactNode }> = ({children}) => {
  return <div className={css.title}>{children}</div>;
};

export default Title;
