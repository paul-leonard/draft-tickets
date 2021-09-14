import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function HeroTitle () {
  return (
    <>
      <div className={styles.header_container}>
        <div className={styles.logogrid}>
          <Image src="/../public/medium_kraken.png" alt="kraken character image" width={150} height={150}/>
        </div>
        <h1 className={styles.title}>
          Season Ticket Drafting Tool
        </h1>
      </div>
      <p className={styles.description}>
        Welcome to the Draft!  This is the page with all of the action!  See the order of the current round and whose turn it is to pick a game.  Check out the full list of games, including who has selected which games and which games are available to snag!
      </p>
    </>
  )
}