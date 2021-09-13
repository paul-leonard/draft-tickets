import styles from '../styles/Home.module.css'
import GameCard from './GameCard'
import PickCard from './PickCard'

export default function GameRow () {
  return (
    <>
      <GameCard/>
      <PickCard/>
      <PickCard/>
      <PickCard/>
      <PickCard/>
    </>
  )
}