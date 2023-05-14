import styles from 'components/progress/Progress.module.scss'
import { ReactComponent as Complete } from 'assets/icons/pg-complete.svg'


function Progress({ icon }) {

  return (
     <section className={styles.progressContainer}>
      <div className={styles.porgressOption}>
        <div className={styles.progressGroup}>
          <div className={styles.progressNumber}>1</div>
          <div className={styles.ProgressComplete}>
            {icon === 1 ? '' : <Complete width='24' height='24' />}
          </div>

          <div className={styles.groupWords}>寄送地址</div>
        </div>

        <div className={styles.progressGroup}>
          {icon < 2 ? <div className={styles.progressNumber} >2</div>
            : <div className={styles.darkBack} >2</div>}
          <div className={styles.ProgressComplete}>
            {icon > 2 && <Complete width='24' height='24' />}
          </div>
          <div className={styles.groupWords}>運送方式</div>
        </div>

        <div className={styles.progressGroup}>
          {icon < 3 ? <div className={styles.progressNumber} >3</div>
            : <div className={styles.darkBack} >3</div>}
          <div className={styles.ProgressComplete}>
            {icon > 3 && <Complete width='24' height='24' />}
          </div>
          <div className={styles.groupWords}>付款資訊</div>
        </div>
      </div>
      <div className={styles.doneGroup}>
        {icon > 1 ? <div className={styles.done}></div> : <div className={styles.unDone}></div>}
        {icon > 2 ? <div className={styles.done}></div> : <div className={styles.unDone}></div>}

      </div>
    </section>

  )
}

export default Progress