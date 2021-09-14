import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Stripe from './Stripe'

export default function HeroTitle () {
  return (
    <>
      <div className={styles.header_container}>
        <div className={styles.logogrid}>
          <Image src="/medium_kraken.png" alt="kraken character image" width={150} height={150}/>
        </div>
        <h1 className={styles.title}>
          Season Ticket Drafting Tool
        </h1>
      </div>
      <p className={styles.description}>
        Welcome to the Draft!  This is the page with all of the action!  See the drafting order of the current round and whose turn it is to pick a game.  Check out the full list of games, including who has selected which games and which games are still available to snag!
      </p>
      <p className={styles.description}>
        This is a preview of the new React with Next.js frontend I am constructing as a user interface to the backend Django RESTful API I created as part of my final group project at Code Fellows coding bootcamp.  This page is representative of what a logged-in member would see while conducting a draft of season tickets with 3 other season ticket owners.  
      </p>
    </>
  )
}