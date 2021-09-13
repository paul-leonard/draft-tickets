import styles from '../styles/Home.module.css'
import GameRow from './GameRow'

export default function TicketTable () {
  return (
    <div className={styles.grid}>
      <GameRow/>
      <GameRow/>
      <GameRow/>
      <GameRow/>
    </div>
  )
}