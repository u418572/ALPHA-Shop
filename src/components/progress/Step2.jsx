import styles from 'components/progress/Progress.module.scss'
import ExpressContent from './ExpressContent'
function Step2({ title }) {
  return (
    <form className={styles.formContainer}>
      <div className={styles.formTitle}>{title.expressWay}</div>
      <div className={styles.stepContainer}>
        <ExpressContent express={title.normalExpress} money={title.free} time={title.period} />
        <ExpressContent express={title.express} money={title.unfree} time={title.expressTime} />
      </div>
    </form>
  )
}

export default Step2