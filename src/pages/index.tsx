import type { NextPage } from 'next'
import { FormCard } from '../components/FormCard'
import { Header } from '../components/Header'
import { PaymentCard } from '../components/PaymentCard'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <PaymentCard />
      <main className={styles.main}>
        <h1 className={styles.title}>
            Ambiente de Produção
        </h1>
      </main>
    </div>
  )
}

export default Home
