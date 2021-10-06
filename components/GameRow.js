import styles from '../styles/TicketTable.module.css'
import GameCard from './GameCard'
import PickCard from './PickCard'

export default function GameRow ({event, index}) {
  return (
    <div className={styles.grid}>
      <GameCard event={event} index={index}/>
      <PickCard/>
      <PickCard/>
      <PickCard/>
      <PickCard/>
      <PickCard/>
    </div>
  )
}