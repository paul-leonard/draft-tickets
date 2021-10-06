import styles from '../styles/TicketTable.module.css'

export default function GameCard ({event, index}) {
  return (
    <a href="link_out_to_nhl_game_page" className={styles.gamecard}>
      <h2>Game #{index}</h2>
      <p>Game details: {event.description}</p>
      <p>Game Primary ID: {event.id}</p>
    </a>
  )
}