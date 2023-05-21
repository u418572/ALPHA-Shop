import styles from 'components/progress/Progress.module.scss'
import { ReactComponent as RightArrow } from 'assets/icons/right-arrow.svg'
import { ReactComponent as LeftArrow } from 'assets/icons/left-arrow.svg'

function ProgressButton({ step, nextClick, prevClick }) {
  return (
    <section className={styles.buttonContainer}>
      <hr />
      <div className={styles.buttonBlock}>
        <div className={styles.previous} onClick={prevClick}>
          {step > 1 && <LeftArrow className={styles.setLeftArrow} />}
          <p>{step > 1 && '上一步'}</p>

        </div>
        <div className={styles.next} onClick={nextClick}  >
          <p>{step < 3 && '下一步'}</p>
          <p>{step === 3 && '確認下單'}</p>
          <p>{step === 4 && '謝謝光臨'}</p>
          {step < 3 && <RightArrow className={styles.setRightArrow} />}
        </div>
      </div>
    </section>
  )
}

export default ProgressButton