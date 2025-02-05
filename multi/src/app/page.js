// pages/index.js

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MultiplyComponent from '../components/MultiplyComponent';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Multiply Numbers</title>
        <meta name="description" content="A simple number multiplication app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <MultiplyComponent />
      </main>
    </div>
  );
}
