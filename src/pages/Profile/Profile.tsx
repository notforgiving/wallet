import React from "react";
import { useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import { formatPrice } from "../../helpers/formatPrice";
import { TInitialState } from "../../store/types";
import css from "./styles.module.scss";

const Profile = () => {
  const wallet_changes = useSelector(
    (state: TInitialState) => state.walletChanges
  );

  return (
    <Layout>
      <div className={css.profile}>
        <div>
          <div className={css.welcome}>Привет, Людмила!</div>
        </div>
        {!!wallet_changes.length && (
          <div className={css.table}>
            <table>
              <thead>
                <th>Дата</th>
                <th>Трата</th>
                <th>Осталось</th>
              </thead>
              <tbody>
                {wallet_changes.map((item, index) => (
                  <tr key={item.remainder * index}>
                    <td>{new Date(item.date).toLocaleDateString("en-US")}</td>
                    <td className={item.waste > 0 ? css.green : css.red}>
                      {item.waste > 0 ? "+" : "-"}
                      {formatPrice(String(item.waste))} ₽
                    </td>
                    <td>{formatPrice(String(item.remainder))} ₽</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* <div className={css.buttons}>
          <Button classname={css.login}>Войти</Button>
          <Button classname={css.register}>Регистрация</Button>
          <Button classname={css.logout}>Выйти</Button>
        </div> */}
      </div>
    </Layout>
  );
};

export default Profile;
