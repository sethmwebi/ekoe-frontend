"use client";
import { NumericFormat } from "react-number-format";

const Currency = ({ price, classNames }) => {
  return (
    <NumericFormat
      value={price}
      displayType={"text"}
      thousandSeparator={true}
      renderText={(value) => <span className={classNames}>ksh {value}</span>}
    />
  );
};

export default Currency;
