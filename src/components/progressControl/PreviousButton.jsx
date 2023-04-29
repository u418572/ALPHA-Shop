import styles from './Control.module.css'
import { ReactComponent as LeftArrow } from '../imgs/left-arrow.svg'
function PreviousButton() {
  return (
    <div >
      <button className={styles.previousButton}>
        <div className={styles.leftGroup}>
          <LeftArrow stroke="#000000" strokeWidth="1" />
          <div className={styles.leftText}>上一步</div>
        </div>
      </button>
    </div>
  )
}

export default PreviousButton
