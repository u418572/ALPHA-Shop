import styles from './Control.module.css'
import { ReactComponent as RightArrow } from '../imgs/right-arrow.svg'
import { ReactComponent as LeftArrow } from '../imgs/left-arrow.svg'
function NextButton() {
  return (
    <div>
      <button className={styles.nextButton}>
        <div className={styles.rightGroup}>
          <p>下一步</p>
          <RightArrow />
         </div>
      </button>
    </div>
  )
}

export default NextButton