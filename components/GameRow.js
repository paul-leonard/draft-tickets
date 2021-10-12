import React, { Component } from 'react'
import styles from '../styles/TicketTable.module.css'
import GameCard from './GameCard'
import { TicketPickCard } from './PickCard'
import { BlankPickCard } from './PickCard'
import { ClaimPickCard } from './PickCard'


export function GameRow ({event, index, props, whose_turn}) {
  return (
    <div className={styles.grid}>

      <GameCard event={event} index={index}/>

      {event.host ? <BlankPickCard/> : <TicketPickCard/>}
      
      {props.series.participants.map((participant, i) => {
          if (event.host && event.host.username === participant.username) {
            return <TicketPickCard/>
          } else if (event.host === null  &&  whose_turn === props.logged_in_user  &&  props.logged_in_user === participant.id) {
            return <ClaimPickCard/>
          } else {
            return <BlankPickCard/>
        }
      })}
   
    </div>
  )
}

export default GameRow;