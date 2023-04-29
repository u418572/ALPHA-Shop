import styles from './Control.module.css'
import NextButton from './NextButton'

function CheckOne () {
  return (
    <div>
      <div className={styles.controlContainer}>
        <hr />
        <div className={styles.buttonLayout}>
           <div className={styles.buttonRight}>
            <NextButton />
           </div>
         </div>
        
      </div>

    </div>
  )
}

export default CheckOne