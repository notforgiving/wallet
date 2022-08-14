import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../store/reducer";
import { TInitialState } from "../../store/types";

export const useSettings = () => {
  const dispatch = useDispatch();
  const wallet = useSelector((state: TInitialState) => state.wallet);

  const [payDay, setPaytDay] = useState<Date | null>(new Date(wallet.payDay));
  const [daysPayday, setDaysPayday] = useState(wallet.daysPayday);
  
  const { register, handleSubmit } = useForm({
    defaultValues: {
      total: Number(wallet.total),
      inDay: Number(wallet.inDay)
    }
  });

  const onSubmit = (data: any) => {
    dispatch(
      setData({
        total: data.total,
        inDay: data.inDay,
        payDay,
        daysPayday,
      })
    );
  };

  const handleChangePayday = (newValue: Date | null) => {
    setPaytDay(newValue);
    if (newValue) {
      const oneDay = 1000 * 60 * 60 * 24;
      const diffInTime = newValue.getTime() - new Date().getTime();
      const diffInDays = Math.round(diffInTime / oneDay);
      setDaysPayday(diffInDays);
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