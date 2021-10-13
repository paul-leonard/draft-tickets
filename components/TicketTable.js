import styles from '../styles/TicketTable.module.css'
import GameRow from './GameRow'

export default function TicketTable ({props}) {

  const draft_array = JSON.parse(props.series.draft_order).draft_order
  const whose_turn = draft_array[props.series.round-1][props.series.pick-1]
  props.events.sort((a,b) => (a.id > b.id) ? 1 : -1)

  return (
    <>  
      <h2 className={styles.title}>Game Ownership and Availability</h2>
      <div className={styles.grid}>
        <div className={styles.gamecard}>
          <h2 className={styles.underline}>Game</h2>
        </div>
        <div className={styles.card}>
          <h2 className={styles.underline}>Unclaimed</h2>
        </div>
        {props.series.participants.map((participant, i) => (
            <div key={i} className={styles.card}>
              <h2 className={styles.underline}>{participant.username}</h2>
            </div>
        ))}
      </div>
      <div>        
        {props.events.map((event,i) => (
          <GameRow key={i} event={event} index={i+1} props={props} whose_turn={whose_turn}/>
        ))}
      </div>
    </>
  )
}