import styles from './Control.module.css'
import NextButton from './NextButton'
import { ReactComponent as RightArrow } from '../imgs/right-arrow.svg'

function CheckOne () {
  return (
    <div>
      <div className={styles.controlContainer}>
        <hr />
        <div className={styles.buttonLayout}>
          <div className={styles.buttonRight}>
            <NextButton content='下一步' />
           </div>
         </div>
        
      </div>

    </div>
  )
}

export default CheckOne