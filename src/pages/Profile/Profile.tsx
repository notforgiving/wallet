import React from "react";
import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import css from "./styles.module.scss";

const Profile = () => {
  return (
    <Layout>
      <div className={css.profile}>
        <div>
          <div className={css.welcome}>Привет, Людмила!</div>
        </div>

        <div className={css.buttons}>
          <Button classname={css.login}>Войти</Button>
          <Button classname={css.register}>Регистрация</Button>
          <Button classname={css.logout}>Выйти</Button>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
