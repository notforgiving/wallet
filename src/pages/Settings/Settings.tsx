import React from "react";
import Button from "../../components/Button/Button";
import CustomField from "../../components/CustomField/CustomField";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/Title/Title";
import css from "./styles.module.scss";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import ruLocale from "date-fns/locale/ru";
import { useSettings } from "./useSettings";

const Settings = () => {
  const {
    handleSubmit,
    onSubmit,
    register,
    payDay,
    handleChangePayday,
    daysPayday,
  } = useSettings();

  return (
    <Layout>
      <form className={css.settings} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.form_body}>
          <Title>Settings</Title>
          <CustomField
            label="Всего на карте"
            placeholder="Введите общую сумму"
            formField={{ ...register("total") }}
          />
          <CustomField
            label="Хочу тратить в день"
            placeholder="Введите сумму"
            formField={{ ...register("inDay") }}
          />
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            adapterLocale={ruLocale}
          >
            <MobileDatePicker
              closeOnSelect
              label="Дата зарплаты"
              value={payDay}
              onChange={handleChangePayday}
              renderInput={(params: any) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <div className={css.daysPayday}>
            <span>Дней до зарплаты</span>
            <div className={css.select_day_value}>{daysPayday}</div>
          </div>
        </div>

        <Button
          attributes={{
            type: "submit",
          }}
        >
          Save
        </Button>
      </form>
    </Layout>
  );
};

export default Settings;
