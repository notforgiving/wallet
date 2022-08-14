import React from "react";
import css from "./styles.module.scss";
import { FiUser, FiMinusSquare, FiGrid } from "react-icons/fi";
import CustomLink from "../CustomLink/CustomLink";

const Footer = () => {
  return (
    <div className={css.footer}>
      <CustomLink to="/main" classname={css.link}>
        <FiUser size={28} />
      </CustomLink>
      <CustomLink to="/profile" classname={css.main_link}>
        <FiMinusSquare size={28} />
      </CustomLink>
      <CustomLink to="/settings" classname={css.link}>
        <FiGrid size={28} />
      </CustomLink>
    </div>
  );
};

export default Footer;
