import styles from './Progress.module.css'
import Icon from '../icons/Icon'
function ProgressGroup(props) {
  const content = props.content
  return (

    <div className={styles.groupContainer}>
      <span className={styles.text}>{content.number}
        <Icon.complete className={styles.icon} />
      </span>
      
      <span className={styles.option}>{content.option}</span>
      <span className={styles.bar}></span>
    </div>
  )

}

export default ProgressGroup