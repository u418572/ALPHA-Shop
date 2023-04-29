import styles from './Control.module.css'
import PreviousButton from './PreviousButton'
import NextButton from './NextButton'
import { ReactComponent as RightArrow } from '../imgs/right-arrow.svg'
import { ReactComponent as LeftArrow } from '../imgs/left-arrow.svg'
function ControlTwo() {
  return (
    <div>
      <div className={styles.controlContainer}>
        <hr />
        <div className={styles.buttonLayout}>
          <div className={styles.buttonLeft}>
            <PreviousButton />
           </div>
          <div className={styles.buttonRight}>
            <NextButton />
           </div>
        </div>


      </div>
    </div>
  )
}

export default ControlTwo