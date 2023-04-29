import styles from './StepProgress.module.css'
import Icons from '../imgs/Icons'

function ProgressGroup(props) {
  const content = props.content
  return (

    <div className={styles.groupContainer}>
      <span className={styles.text}>{content.number}
        <Icons.Complete className={styles.icon} />
      </span>
      <span className={styles.option}>{content.option}</span>
      <span className={styles.bar}></span>
    </div>
  )

}

export default ProgressGroup