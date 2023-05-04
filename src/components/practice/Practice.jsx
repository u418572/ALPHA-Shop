import styles from './Practice.module.css'
import stepProgress1 from '../stepProgress/StepProgress1'
function Practice () {
  return (
    <div className={styles.container}>
      <p>這是練習頁面，無關作業！！！！</p>
      <Progress1 />
    </div>
  )
}

export default Practice