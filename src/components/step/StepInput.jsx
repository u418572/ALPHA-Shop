import styles from './Step.module.css'
import './Input.css'

function StepInput (props) {
 return (
      <div className={styles.inputGroup}>
        <label htmlFor="" className={styles.inputTitle} >{props.title}</label>
       <input type={props.type} className={props.inputStyle} placeholder={props.content}/>
     </div>
  )
 }

export default StepInput