import styles from '../styles/TicketTable.module.css'
import GameCard from './GameCard'
import PickCard from './PickCard'

export default function GameRow () {
  return (
    <div className={styles.grid}>
      <GameCard/>
      <PickCard/>
      <PickCard/>
      <PickCard/>
      <PickCard/>
      <PickCard/>
    </div>
  )
}