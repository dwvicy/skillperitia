import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>skillperitia</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <h1>work in progress.</h1>
      <img className={styles.image} src="/skillperitia.png" alt="logo" />
    </div>
  )
}
