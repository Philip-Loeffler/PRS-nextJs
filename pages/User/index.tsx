import Link from "next/link";
import Head from "next/head";
import styles from "./User.module.css";
import { InferGetStaticPropsType } from "next";

export default function User({
  user,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ul>
      <li className={styles.error}>{user.name}</li>
    </ul>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:8080/user");
  console.log(res);
  const user = await res.json();

  return {
    props: {
      user,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
}
