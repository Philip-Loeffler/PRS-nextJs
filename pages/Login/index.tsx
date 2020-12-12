import React from "react";
import classnames from "classnames/bind";
import { Input } from "../../Components/Input";
import styles from "./Login.module.css";

const cx = classnames.bind(styles);

export default function Login() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <div className={styles.main}>
        <Input inputLabel="" placeholder="enter name"></Input>
        <Input inputLabel="" placeholder="enter password"></Input>
      </div>
    </div>
  );
}
