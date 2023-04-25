import styles from './Step.module.css'
import './Input.css'

function StepSelect(props) {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor="" className={styles.inputTitle}>{props.title}</label>
      <select name="" id="" className={props.inputStyle}>{props.children}</select>
    </div>
  )
}

export default StepSelect