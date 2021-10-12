import LoginForm from '../forms/LoginForm';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';
import Image from 'next/dist/client/image'; 
import Stripe from '../components/Stripe';
import Head from 'next/head';


export default function Login() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Season Ticket Draft Login Page</title>
        <meta name="Season Ticket Drafting Tool Login Page" content="Log in to the web app to draft individual game tickets amongst a group of owners sharing season tickets to sporting events." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <div className={styles.header_container}>
        <div className={styles.logogrid}>
            <Image src="/medium_kraken.png" alt="kraken character image" width={150} height={150}/>
          </div>
          <h1 className={styles.title}>
            Season Ticket Drafting Tool <br/> Login Page
          </h1>
        </div>

        <Stripe/>
        <LoginForm/>
      </main>

      <Footer/>
    </div>
  )
}

