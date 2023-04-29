import styles from './Control.module.css'
import { ReactComponent as LeftArrow } from '../imgs/left-arrow.svg'
import './style.css'
function PreviousButton(props) {
  return (
    <div >
      <button className={styles.previousButton}>
        <div className={styles.leftGroup}>
          <div>
            <LeftArrow stroke="#000000" strokeWidth="1"  />
          </div>
          
          <div className={styles.leftText}>上一步</div>
        </div>
      </button>
    </div>
  )
}

export default PreviousButton
