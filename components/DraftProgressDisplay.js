import styles from '../styles/DraftProgressDisplay.module.css'

export default function DraftProgressDisplay ({props}) {

  let draft_order_names = JSON.parse(props.series.draft_order).draft_order.map(row => row.map(id => {
    let username = ""
    props.series.participants.forEach((x,i) => {
      if (id === x.id) {
        username = x.username
      }
    })
    return username
  }))

  let draft_order_names_and_pick_one = {
    draft_order_names: draft_order_names,
    pick: props.series.pick,
    round: props.series.round,
    row: 1
  }

  let draft_order_names_and_pick_two = {
    draft_order_names: draft_order_names,
    pick: props.series.pick,
    round: props.series.round,
    row: 2
  }

  return (
    <>
      <h2 className={styles.title}>Draft Order and Current Pick</h2>

      <div>
      <div className={styles.grid}>
            <div className={styles.card}>
              <h2 className={styles.underline}>Alternating Rounds</h2>
            </div>
            <DraftHeading row_order={[...Array(draft_order_names_and_pick_one.draft_order_names[0].length).keys()].map( num => (
              "Pick " + (num + 1).toString()
            ))}/>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Random Round:</h2>
          </div>
          <DraftRow order_and_pick={draft_order_names_and_pick_one}/>
        </div>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Snake Round:</h2>
          </div>
          <DraftRow order_and_pick={draft_order_names_and_pick_two}/>
        </div>
      </div>

    </>
  )
}


export function DraftHeading ({row_order}) {
  return (
    <>  
      {row_order.map((turn, i) => {
          return (
            <div key={i} className={styles.card}>
              <h4 className={styles.underline}>{turn}</h4>
            </div>
          )
      })}
    </>
  )
}


export function DraftRow ({order_and_pick}) {
  return (
    <>  
      {order_and_pick.draft_order_names[order_and_pick.row-1].map((turn, i) => {
        if (order_and_pick.row === order_and_pick.round && order_and_pick.pick == i+1) {
          return (
            <div key={i} className={styles.cardsturn}>
              <h4>{turn}&apos;s Turn</h4>
            </div>
          )
        } else {
          return (
            <div key={i} className={styles.card}>
              <h4>{turn}</h4>
            </div>
          )
        }
      })}
    </>
  )
}
