import styles from './Control.module.css'
import { ReactComponent as RightArrow } from '../imgs/right-arrow.svg'
function NextButton(props) {
  return (
    <div>
      <button className={styles.nextButton}>
        <div className={styles.buttonGroup}>
          <p>下一步</p>
          <RightArrow />
        </div>
      </button>
    </div>
  )
}

export default NextButton