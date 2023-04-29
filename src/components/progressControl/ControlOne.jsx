import styles from './Control.module.css'
import NextButton from './NextButton'
import './style.css'
function CheckOne () {
  return (
    <div>
      <div className={styles.controlContainer}>
        <hr />
        <div className={styles.buttonLayout}>
           <div className={styles.buttonRight}>
            <NextButton content='下一步' show='' />
           </div>
         </div>
        
      </div>

    </div>
  )
}

export default CheckOne