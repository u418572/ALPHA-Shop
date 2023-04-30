import styles from './StepProgress.module.css'
import Icons from '../imgs/Icons'

function ProgressGroup(props) {
  const content = props.content
  return (

    <div className={styles.groupContainer} id={content.step}>
      <span>
        <Icons.Complete className={styles.icon} />
      </span>
       <span className={styles.text}>{content.number}
       </span>
       <span className={styles.option}>{content.option}</span>
      <span className={styles.bar}></span>
    </div>
  )

}

export default ProgressGroup