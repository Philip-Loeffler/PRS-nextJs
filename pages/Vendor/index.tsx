import Link from "next/link";
import Head from "next/head";
import styles from "./Vendor.module.css";
import { InferGetStaticPropsType } from "next";

export default function Vendor({
  vendor,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ul>
      <li className={styles.error}>{vendor.name}</li>
      <li className={styles.error}>{vendor.address}</li>
    </ul>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:8080/vendor/1");
  console.log(res);
  const vendor = await res.json();

  return {
    props: {
      vendor,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
}
