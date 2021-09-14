import styles from '../styles/TicketTable.module.css'
import GameRow from './GameRow'

export default function TicketTable ({participants}) {
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
        {participants.map((participant, i) => (
            <div key={i} className={styles.card}>
              <h2>{participant.username}</h2>
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