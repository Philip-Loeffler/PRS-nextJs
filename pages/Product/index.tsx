import Link from "next/link";
import Head from "next/head";
import styles from "./Product.module.css";
import { InferGetStaticPropsType } from "next";

export default function Produc({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ul>
      <li className={styles.error}></li>
    </ul>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:8080/product/");
  console.log(res);
  const product = await res.json();

  return {
    props: {
      product,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
}
