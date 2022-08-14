import React, { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";

interface ICustomLink {
  to: string;
  children: ReactNode;
  classname?: string;
}

interface INavLinkClassName {
  isActive: boolean;
}

const CustomLink: FC<ICustomLink> = ({ to, children, classname }) => {
  const styles = (props: INavLinkClassName) =>
    props.isActive ? cn(classname, "isActive") : classname;

  return (
    <NavLink to={to} className={styles}>
      {children}
    </NavLink>
  );
};

export default CustomLink;
