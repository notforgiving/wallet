import React, { FC, ReactNode } from "react";
import cn from "classnames";
import css from "./styles.module.scss";

interface IButton {
  children: ReactNode;
  attributes?: any;
  classname?: string;
}

const Button: FC<IButton> = ({ children, attributes, classname }) => {
  return (
    <button {...attributes} className={cn(css.button, classname)}>
      {children}
    </button>
  );
};

export default Button;
