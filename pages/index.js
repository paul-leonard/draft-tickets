import Head from 'next/head'
import DraftProgressDisplay from '../components/DraftProgressDisplay'
import TicketTable from '../components/TicketTable'
import Footer from '../components/Footer'
import HeroTitle from '../components/HeroTitle'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Season Ticket Draft</title>
        <meta name="Season Ticket Drafting Tool" content="A web app to draft individual game tickets amongst a group of owners sharing season tickets to sporting events." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroTitle/>
      {/* <main className={styles.main}> */}
        <DraftProgressDisplay/>
        <TicketTable/>
      {/* </main> */}

      <Footer/>


    </div>
  )
}
