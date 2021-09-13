// import styles from '../styles/Home.module.css'
import styles from '../styles/DraftProgressDisplay.module.css'
import GameRow from './GameRow'

export default function TicketTable ({names}) {
  return (
    <>
      <h2 className={styles.title}>Ticket Ownership and Availability</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h1>Game</h1>
        </div>
        <div className={styles.card}>
          <h1>Unclaimed</h1>
        </div>
        {names.map((name, i) => (
            <div key={i} className={styles.card}>
              <h1>{name}</h1>
            </div>
        ))}
        <GameRow/>
        <GameRow/>
        <GameRow/>
        <GameRow/>
      </div>
    </>
  )
}