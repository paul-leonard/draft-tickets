import styles from '../styles/TicketTable.module.css'
import React from 'react'
import Image from 'next/image'
import claimGame from '../services/data-fetcher.js'

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

  async function processClaim(eventId="all of them!!!") {
    console.log(`Hi, I'd like to claim gameID ${eventId}.`);
    let responsetwo = await claimGame(27);
    console.log('Response from claim request is: ',responsetwo)
  }

  return (
    // <a href="event/<int:pk>/host/" className={styles.card}>Claim Game</a>
    // <a href="claimGame(8)" className={styles.card}>Claim Game</a>
    <div 
      className={styles.card}
      // onClick={() => claimGame(27)}>
      onClick={() => processClaim(27)}>
        Claim Game
    </div>
  )
}

//  class ClaimPickCard extends React.Component {
//   handleClick = () => 

//   }
//   return (
//     // <a href="event/<int:pk>/host/" className={styles.card}>Claim Game</a>
//     // <a href="claimGame(8)" className={styles.card}>Claim Game</a>
//     <div 
//       className={styles.card}
//       onClick={claimGame(8)}>
//         Claim Game
//     </div>
//   )
// }

// export ClaimPickCard;