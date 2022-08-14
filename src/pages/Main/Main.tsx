import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/Layout/Layout";
import { TInitialState } from "../../store/types";
import css from "./styles.module.scss";
import cn from 'classnames';
import { formatPrice } from "../../helpers/formatPrice";

const Main = () => {
  const wallet = useSelector((state: TInitialState) => state.wallet);
  console.log(wallet,'wallet');
  
  const economy = formatPrice(String(wallet.total - (wallet.inDay * (wallet.daysPayday + 1))));
  const total = formatPrice(String(wallet.total))
  const inDay = formatPrice(String(wallet.inDay))

  return <Layout>

  <div className={css.grid}>
    <div className={cn(css.card,'yellow')}>
      <strong>Всего средств</strong>
      <span>{total} ₽.</span>
    </div>
    <div className={cn(css.card,'green')}>
      <strong>Если тратить по {inDay} в день, останется</strong>
      <span>{economy} ₽.</span>
    </div>
    <div className={cn(css.card,'blue')}>
      <strong>На сегодня есть</strong>
      <span>{inDay} ₽.</span>
    </div>
  </div>

  </Layout>;
};

export default Main;
