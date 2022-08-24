import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setMain, setChanges } from "../../store/reducer";
import { TInitialState } from "../../store/types";

export const useSettings = () => {
  const dispatch = useDispatch();
  const wallet = useSelector((state: TInitialState) => state.wallet);
  const wallet_changes = useSelector((state: TInitialState) => state.walletChanges);

  const [total, setTotal] = useState(wallet.total);
  const [inDay, setInDay] = useState(wallet.inDay);
  const [payDay, setPayDay] = useState(new Date());
  const [daysPayday, setDaysPayday] = useState(0);

  useEffect(() => {
    setPayDay(wallet.payDay)
    setDaysPayday(wallet.daysPayday)
  }, [wallet])

  useEffect(() => {
    clacDaysPayday(null)
  }, [payDay])

  const { register, handleSubmit } = useForm({
    defaultValues: {
      total: total,
      inDay: inDay
    }
  });

  const onSubmit = (data: any) => {

    dispatch(
      setChanges([
        ...wallet_changes,
        {
          date: new Date(),
          waste: data.total - total,
          remainder: data.total
        }
      ])
    )
    dispatch(
      setMain({
        total: data.total,
        inDay: data.inDay,
        payDay,
        daysPayday,
      })
    );
  };

  const clacDaysPayday = (newValue: Date | null) => {
    const oneDay = 1000 * 60 * 60 * 24;
    let diffInTime = payDay.getTime() - new Date().getTime();
    if (newValue) {
      diffInTime = newValue.getTime() - new Date().getTime();
    }
    const diffInDays = Math.round(diffInTime / oneDay);
    setDaysPayday(diffInDays);
  }

  const handleChangePayday = (newValue: Date | null) => {
    if (newValue) {
      setPayDay(newValue);
      clacDaysPayday(newValue)
    }
  };

  return {
    handleSubmit,
    onSubmit,
    register,
    payDay,
    handleChangePayday,
    daysPayday,
  }
}