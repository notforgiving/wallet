import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import css from "./styles.module.scss";

const Welcom = () => {
  return (
    <div className={css.body}>
      <div className={css.header}>
        <div className={css.card}>
          <div className={css.card_header}>
            <div className={css.card_title}>Banksad</div>
            <div className={css.card_type}>VISA</div>
          </div>
          <div className={css.card_smile}>
            <div className={css.card_circle} />
          </div>
        </div>
      </div>
      <h1 className={css.title}>Help You Digitize Your Finance</h1>
      <Link to="/profile">
        <Button>Get Started</Button>
      </Link>
    </div>
  );
};

export default Welcom;
