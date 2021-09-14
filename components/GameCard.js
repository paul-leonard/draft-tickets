import styles from '../styles/TicketTable.module.css'

export default function GameCard () {
  return (
    <a href="link_out_to_nhl_game_page" className={styles.gamecard}>
      <h2>Game #: Opponent</h2>
      <p>Game details</p>
    </a>
  )
}