import React, { Component } from 'react'
import styles from '../styles/TicketTable.module.css'
import GameCard from './GameCard'
import { TicketPickCard } from './PickCard'
import { BlankPickCard } from './PickCard'
import { ClaimPickCard } from './PickCard'

export default function GameRow ({event, index, props, whose_turn, fake_user_id}) {
  return (
    <div className={styles.grid}>

      <GameCard event={event} index={index}/>

      {event.host ? <BlankPickCard/> : <TicketPickCard/>}
      
      {props.series.participants.map((participant, i) => {
        () => {
          if (event.host === participant) {
            return <TicketPickCard/>
          // } else if (event.host != null && fake_user_id === participant) {
          } else if (fake_user_id === participant) {
            return <ClaimPickCard/>
          } else {
            return <BlankPickCard/>
          }
        }
      })}
   
    </div>
  )
}

// export default GameRow;