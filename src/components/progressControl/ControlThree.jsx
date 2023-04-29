import styles from './Control.module.css'
import PreviousButton from './PreviousButton'
import NextButton from './NextButton'
import { ReactComponent as RightArrow } from '../imgs/right-arrow.svg'
import { ReactComponent as LeftArrow } from '../imgs/left-arrow.svg'
function ControlThree() {
  return (
    <div>
      <div className={styles.controlContainer}>
        <div className={styles.buttonLayout}>
          <div className={styles.buttonLeft}>
            <PreviousButton />
              {/* <LeftArrow stroke="#000000" strokeWidth="0.2rem" /> */}
           
          </div>
          <div className={styles.buttonRight}>
            <NextButton />
              {/* <RightArrow stroke="#DB7290" strokeWidth="0.2rem" /> */}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default ControlThree