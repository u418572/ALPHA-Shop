import styles from './Step.module.css'
import './Input.css'

function Step2Input(props) {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor="" className={props.inputStyle} >
        <input type={props.type} className={styles.step2Input} placeholder={props.content} />
        <div className={styles.radioGroup}>
          <div className={styles.transport}>
            <div >{props.title}</div>
            <div>{props.price}</div>
          </div>
          <div className={styles.step2Content}>{props.content}</div>
        </div>
        
      </label>
     
    </div>
  )
}

export default Step2Input