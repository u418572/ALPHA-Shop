import styles from './Control.module.css'
import { ReactComponent as RightArrow } from '../imgs/right-arrow.svg'
import './style.css'
function NextButton(props) {
  return (
    <div>
      <button className={styles.nextButton}>
        <div className={styles.rightGroup}>
          <p>{props.content}</p>
          <div className={props.show}>
            <RightArrow />
          </div>
        </div>
      </button>
    </div>
  )
}

export default NextButton