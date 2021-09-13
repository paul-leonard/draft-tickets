import styles from '../styles/Home.module.css'
// import DraftRow from './DraftRow'

export default function DraftProgressDisplay ({draft_order}) {
  return (
    <>
      <p>Draft Overview Table and Current Pick Indicator Coming Soon</p>
      <h2> The Draft Order:  {draft_order}</h2>

      {/* <div className={styles.grid}>
        <DraftRow row_order={draft_order[0]}/>
        <DraftRow row_order={draft_order[1]}/>
      </div> */}

      <div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Random Round</h2>
          </div>
          <DraftRow row_order={draft_order[0]}/>
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Snake Round</h2>
          </div>
          <DraftRow row_order={draft_order[1]}/>
        </div>
      </div>

    </>
  )
}


export function DraftRow ({row_order}) {
  return (
    <>
      {row_order.map((turn, i) => (
       <div key={i} className={styles.card}>
         <h4>{turn}</h4>
       </div>
      ))}
    </>
  )
}
