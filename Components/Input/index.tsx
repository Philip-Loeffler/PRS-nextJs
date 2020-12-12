import React, { Fragment } from "react";
import classnames from "classnames/bind";
import styles from "./Input.module.css";

interface CustomInputProps {
  inputLabel: React.ReactNode;
  error?: string;
  ref?: any;
  isLoading?: boolean;
  subtext?: string;
  inputAdornment?: React.ReactNode;
}

type InputProps = CustomInputProps & React.HTMLProps<HTMLInputElement>;
const cx = classnames.bind(styles);

export const Input: React.FC<InputProps> = React.forwardRef<
  HTMLInputElement,
  InputProps
>((props, ref) => {
  return (
    <Fragment>
      <label htmlFor={props.id}>{props.inputLabel}</label>
      <div className={cx("input-container")}>
        <input
          type={props.type || "text"}
          defaultValue={props.defaultValue}
          value={props.value}
          ref={ref}
          name={props.name}
          disabled={props.disabled}
          placeholder={props.placeholder}
          className={cx("un")}
          onChange={props.onChange}
          onBlur={props.onBlur}
          pattern={props.pattern}
        />
      </div>
    </Fragment>
  );
});
