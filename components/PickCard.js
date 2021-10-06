import styles from '../styles/TicketTable.module.css'
import Image from 'next/image'

export function TicketPickCard () {
  return (
    <div className={styles.card}>
      <Image src="/../public/ticket.png" alt="illustration of a ticket" width={60} height={30}/>
    </div>
  )
}

export function BlankPickCard () {
  return (
    <div className={styles.card}/>
  )
}

export function ClaimPickCard () {
  return (
    <a href="conditional_link_to_api_to_claim" className={styles.card}>Claim Game</a>
  )
  }