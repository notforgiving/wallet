import React, { FC, ReactNode } from "react";
import Footer from "../Footer/Footer";
import css from "./styles.module.scss";
import Div100vh from "react-div-100vh";

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <Div100vh>
      <div className={css.layout}>
        <div>{children}</div>
        <Footer />
      </div>
    </Div100vh>
  );
};

export default Layout;
