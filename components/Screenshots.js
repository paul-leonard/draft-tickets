import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Screenshots () {
  return (
    <div className={styles.side_by_side}>
      <div className={styles.sum_and_pic_container}>
        <h3>KrakenFan2&apos;s View</h3>
        <p className={styles.description}>
          As can be seen in the Draft Progress Table at the top of the screenshot, it is currently KrakenFan2&apos;s turn to pick a game to attend.  To enable the selection of a game, the PickCards they can choose from contain  a link to claim the game.
        </p>
        <Image src="/krakenfan2screenshot.png" alt="screenshot of view seen by KrakenFan2" width={350} height={400}/>
      </div>

      <div className={styles.sum_and_pic_container}>
        <h3>KrakenFan3&apos;s View</h3>
        <p className={styles.description}>
          The screenshot below displays the Draft Progress Table and Game Ticket  Table as seen by KrakenFan3.  The view is also the same for KrakenFan1 and KrakenFan4.  They can see who has choosen which games and which are available, but currently do not have authorization to claim a game.
        </p>
        <Image src="/krakenfan3screenshot.png" alt="screenshot of view seen by KrakenFan2" width={350}  height={400}/>
      </div>
    </div>
  )
}