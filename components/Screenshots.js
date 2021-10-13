import styles from '../styles/Welcome.module.css'
import Image from 'next/image'

export default function Screenshots () {

  let scale_down = 6
  let k2sc_w = Math.floor(2506/scale_down)
  let k2sc_h = Math.floor(2518/scale_down)
  let k3sc_w = Math.floor(2504/scale_down)
  let k3sc_h = Math.floor(2520/scale_down)

  return (
    <div className={styles.side_by_side}>
      <h2>Sample Screenshots</h2>

      <div className={styles.sum_and_pic_container_a}>
        <h3>KrakenFan2&apos;s View</h3>
        <p className={styles.description}>
          As can be seen in the Draft Progress Table at the top of the screenshot, it is currently KrakenFan2&apos;s turn to pick a game to attend.  To enable the selection of a game, the PickCards they can choose from contain  a link to claim the game.
        </p>
        <Image src="/krakenfan2screenshot.png" alt="screenshot of view seen by KrakenFan2" width={k2sc_w} height={k2sc_h}/>
      </div>

      <div className={styles.sum_and_pic_container_b}>
        <h3>KrakenFan3&apos;s View</h3>
        <p className={styles.description}>
          The screenshot below displays the Draft Progress Table and Game Ticket  Table as seen by KrakenFan3.  The view is also the same for KrakenFan1 and KrakenFan4.  They can see who has choosen which games and which are available, but currently do not have authorization to claim a game.
        </p>
        <Image src="/krakenfan3screenshot.png" alt="screenshot of view seen by KrakenFan3" width={k3sc_w} height={k3sc_h}/>
      </div>
    </div>
  )
}