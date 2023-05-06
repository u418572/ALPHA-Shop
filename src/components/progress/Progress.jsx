import styles from 'components/progress/Progress.module.scss'
import {ReactComponent as Complete} from 'assets/icons/pg-complete.svg'
 

function Progress() {
  return (

    <section className={styles.progressContainer}>
      <div className={styles.porgressOption}>
        <div className={styles.progressGroup}>
          <div className={styles.progressNumber}>1</div>
          <div className={styles.ProgressComplete}>
            <Complete width='24' height='24' />
          </div>
         
          <div className={styles.groupWords}>寄送地址</div>
        </div>

        <div className={styles.progressGroup}>
          <div className={styles.progressNumber}>2</div>
          <div className={styles.ProgressComplete}>
            <Complete width='24' height='24' />
          </div>
          <div className={styles.groupWords}>運送方式</div>
        </div>

        <div className={styles.progressGroup}>
          <div className={styles.progressNumber}>3</div>
          <div className={styles.ProgressComplete}>
            <Complete width='24' height='24' />
          </div>
          <div className={styles.groupWords}>付款資訊</div>
        </div>
      </div>
      <div className={styles.doneGroup}>
        <div className={styles.progressDone}></div>
        <div className={styles.progressUndone}></div>
      </div>

    </section>

  )
}

export default Progress