import styles from './style.module.css'
import Icon from '../icons/Icon'
function ProgressGroup(props) {
  const content = props.content
  return (

    <div className={styles.groupContainer}>
      <span className={styles.text}>{content.number}</span>
      <Icon.complete className={styles.icon} />
      
      <span className={styles.option}>{content.option}</span>
      <span className={styles.bar}></span>

    </div>
  )

}

export default ProgressGroup