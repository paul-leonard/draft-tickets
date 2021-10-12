import React from 'react'
import Head from 'next/head'
import DraftProgressDisplay from '../components/DraftProgressDisplay'
import TicketTable from '../components/TicketTable'
import Footer from '../components/Footer'
import HeroTitle from '../components/HeroTitle'
import Stripe from '../components/Stripe'
import LoginForm from '../forms/LoginForm'
import styles from '../styles/Home.module.css'
import { getEventData, getSeriesData, getUser } from '../services/data-fetcher'
import { withRouter } from 'next/router'


class Home extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      id: 8,
      series: {
        title: '...',
        participants: [],
        draft_order: '{"draft_order": [[5, 7, 8, 6], [6, 8, 7, 5]]}',
        round: 1,
        pick: 1,
      },
      events: [],
      logged_in_user: 0
    }
  }

  async componentDidMount() {
    const id = 8;
    
    const series = await getSeriesData(id);
    const AllEvents = await getEventData();
    const logged_in_user = await getUser();

    const events = AllEvents.filter(event => {
      return event.series.id === id;
    })

    // console.log('series as brought in: ', series)
    // console.log('events as brought in: ', events)

    this.setState({ series, events, logged_in_user });
  }

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Season Ticket Draft</title>
          <meta name="Season Ticket Drafting Tool" content="A web app to draft individual game tickets amongst a group of owners sharing season tickets to sporting events." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>


          { (this.state.logged_in_user)
            ? <>
              <HeroTitle/>
              <Stripe/>
              <DraftProgressDisplay props={this.state}/>
              <Stripe/>
              <TicketTable props={this.state}/>
              </>
            :
              <>
                {/* <WelcomeTitle/> */}
                <Stripe/>
                <LoginForm/>
              </>
          }

        </main>

        <Footer/>
      </div>
    )
  }
}

export default withRouter(Home)
