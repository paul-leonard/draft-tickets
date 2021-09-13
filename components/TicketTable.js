import styles from '../styles/TicketTable.module.css'
import GameRow from './GameRow'

export default function TicketTable ({names}) {
  return (
    <>
      <h2 className={styles.title}>Game Ownership and Availability</h2>
      <div className={styles.grid}>
        <div className={styles.gamecard}>
          <h2>Game</h2>
        </div>
        <div className={styles.card}>
          <h2>Unclaimed</h2>
        </div>
        {names.map((name, i) => (
            <div key={i} className={styles.card}>
              <h2>{name}</h2>
            </div>
        ))}
      </div>
      <div>
        <GameRow/>
        <GameRow/>
        <GameRow/>
        <GameRow/>
      </div>
    </>
  )
}