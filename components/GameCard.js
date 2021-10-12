import styles from '../styles/TicketTable.module.css'

export default function GameCard ({event, index}) {
  return (
    <a href="link_out_to_nhl_game_page" className={styles.gamecard}>
      <h3>Game #{index}</h3>
      <div>
        <h4>Game details:</h4>
        <p>{event.description}</p>
      </div>
      <p>Event ID: {event.id}</p>
    </a>
  )
}