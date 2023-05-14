import styles from 'components/progress/Progress.module.scss'

function ExpressContent(props) {
  return (
    <>
      <div className={styles.expressBlock}>
         <label htmlFor="name" className={styles.expressInput} >
          <div className={styles.radioBlock}>
            <input type="radio" name='name' placeholder="" />
          </div>
          <div className={styles.expressContent}>
            <div className={styles.expressInfo}>
              <div>{props.express}</div>
              <div>{props.money}</div>
            </div>
            <div className={styles.expressTime}>{props.time}</div>
          </div>
        </label>
      </div >
    </>
  )
}

export default ExpressContent