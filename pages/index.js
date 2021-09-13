import Head from 'next/head'
import DraftProgressDisplay from '../components/DraftProgressDisplay'
import TicketTable from '../components/TicketTable'
import Footer from '../components/Footer'
import HeroTitle from '../components/HeroTitle'
import Stripe from '../components/Stripe'
import styles from '../styles/Home.module.css'




export default function Home(props) {


  return (
    <div className={styles.container}>
      <Head>
        <title>Season Ticket Draft</title>
        <meta name="Season Ticket Drafting Tool" content="A web app to draft individual game tickets amongst a group of owners sharing season tickets to sporting events." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HeroTitle/>
        <Stripe/>
        <DraftProgressDisplay draft_order={props.data.draft_order}/>
        <TicketTable/>
      </main>

      <Footer/>


    </div>
  )
}


export async function getStaticProps() {

  return {
    props: {
      data: {"draft_order": [[5, 7, 8, 6], [6, 8, 7, 5]]}
    }
  }
}