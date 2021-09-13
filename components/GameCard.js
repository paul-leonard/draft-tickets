import styles from '../styles/Home.module.css'

export default function GameCard () {
  return (
    <a href="link_out_to_nhl_game_page" className={styles.card}>
      <h2>Game #: Opponent</h2>
      <p>Game details</p>
    </a>
  )
}