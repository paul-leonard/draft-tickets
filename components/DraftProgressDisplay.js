import styles from '../styles/DraftProgressDisplay.module.css'

export default function DraftProgressDisplay ({draft_order}) {
  return (
    <>
      <h2 className={styles.title}>Draft Order and Current Pick</h2>
      {/* <h2 className={styles.title}>{draft_order}</h2> */}

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
