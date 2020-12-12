import React from "react";
import classnames from "classnames/bind";
import { Input } from "../../Components/Input";
import styles from "./Login.module.css";

const cx = classnames.bind(styles);

export default function Login() {
  return (
    <div className={cx("body")}>
      <div className={cx("main")}>
        <div className={cx("className")}>commit test</div>
        <Input inputLabel="name" placeholder="name"></Input>
        <Input inputLabel="name"></Input>
      </div>
    </div>
  );
}
