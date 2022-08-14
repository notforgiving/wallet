import React, { FC } from "react";
import css from "./styles.module.scss";
import cn from "classnames";
import { InputProps } from "@mui/material";

interface ICustomField {
  label?: string;
  type?: "text" | "number";
  placeholder?: string;
  currency?: string;
  formField: any;
}

const CustomField: FC<ICustomField & InputProps> = ({
  label,
  type = "text",
  placeholder,
  currency = "₽",
  formField,
}) => {
  return (
    <div className={cn(css.field, "CustomField")}>
      {label && <label>{label}</label>}
      <div className={css.input_box}>
        <input
          type={type}
          placeholder={placeholder}
          {...formField}
        />
        {currency && <div className={css.currency}>{currency}</div>}
      </div>
    </div>
  );
};

export default CustomField;
