import styles from '../styles/TicketTable.module.css'
import Image from 'next/image'

export default function PickCard () {

  // const conditional = True

  return (
    // Conditionally blank, owned tickets image, or claim button:

    // if the column heading person has claimed this game (including unclaimed)
    // <div className={styles.card}>
    //   <Image src="/../public/ticket.png" alt="illustration of a ticket" width={60} height={30}/>
    // </div>
    
    // else if unclaimed game and it is the user's turn to pick
    <a href="conditional_link_to_api_to_claim" className={styles.card}>Claim Game</a>
    
    // else
    // <div className={styles.card}/>

    


  )
}