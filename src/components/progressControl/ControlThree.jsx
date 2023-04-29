import styles from './Control.module.css'
import PreviousButton from './PreviousButton'
import NextButton from './NextButton'
import './style.css'

function ControlThree() {
  return (
    <div>
      <div className={styles.controlContainer}>
        <hr />
        <div className={styles.buttonLayout}>
          <div className={styles.buttonLeft}>
            <PreviousButton />
           </div>
          <div className={styles.buttonRight}>
            <NextButton content='確認下單' show='noshow'/>
           </div>
        </div>
      </div>
    </div>
  )
}

export default ControlThree