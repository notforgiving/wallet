import React, { FC, ReactNode } from "react";
import Footer from "../Footer/Footer";
import css from "./styles.module.scss";

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className={css.layout}>
      <div>
      {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
