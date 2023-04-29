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
            <PreviousButton content='上一步'>
              <LeftArrow stroke="#DB7290" strokeWidth="0.2rem" />
            </PreviousButton>
          </div>
          <div className={styles.buttonRight}>
            <NextButton content='確認下單'>
              <RightArrow stroke="#DB7290" strokeWidth="0.2rem" />
            </NextButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ControlThree