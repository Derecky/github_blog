import type { NextPage } from 'next'
import { Header } from '../components/Header'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <h1 className={styles.title}>
          Ambiente de Produção

        </h1>
      </main>
    </div>
  )
}

export default Home
