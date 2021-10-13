import LoginForm from '../forms/LoginForm';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';
import Image from 'next/dist/client/image'; 
import Stripe from '../components/Stripe';
import Head from 'next/head';


export default function Welcome() {

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
            Season Ticket Drafting Tool
          </h1>
        </div>

        <Stripe/>
        <p className={styles.description}>
          Welcome to the Season Ticket Drafting Tool!  I designed this web app to help some friends and me draft games to our shared two season ticket seats for the inaugural season of the Seattle Kraken! 
        </p>
        <p className={styles.description}>          
          The app provides a randomized and fair way to distribute a limited resource using a web-based draft.  Each season ticket member has their own login which customizes their views of information and limits their actions through authentication.
        </p>
        <p className={styles.description}>
          Designing the app was a good lesson in many technologies.  The frontend was developed with the React Next.js framework and hosted on Vercel.  The RESTful API is a Dockerized Django backend hosted on Heroku supported by postgreSQL database at ElephantSQL.
        </p>
        <p className={styles.description}>
          For a high level overview, checkout the summary images below.  To see the app in a little bit of action, login with the username of `&apos;`krakenfan2`&apos;` and a password of `&apos;`uncommon`&apos;`.  Thanks for checking it out!
        </p>
        <Stripe/>
        
        <LoginForm/>
      </main>

      <Footer/>
    </div>
  )
}

