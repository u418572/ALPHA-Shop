import styles from 'components/progress/Progress.module.scss'
import {ReactComponent as RightArrow} from 'assets/icons/right-arrow.svg'
import { ReactComponent as LeftArrow } from 'assets/icons/left-arrow.svg'

function ProgressButton(props) {
  return (
    <section className={styles.buttonContainer}>
      <hr />
      <div className={styles.buttonBlock}>
        <div className={styles.previous}>
          <LeftArrow className={styles.setLeftArrow} />
          <p>上一步</p>
         </div>
        <div className={styles.next}>
          <p>{props.step}</p>
          {/* <RightArrow className={styles.setRightArrow}/> */}
         </div>
      </div>
    </section>
  )
}

export default ProgressButton