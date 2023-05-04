import styles from './Step.module.css'
import './Input.css'

function StepInput (props) {
 return (
      <div className={styles.inputGroup}>
        <label htmlFor="name" className={styles.inputTitle} >{props.title}</label>
       <input type={props.type} className={props.inputStyle} placeholder={props.content} name='name' id='name'/>
     </div>
  )
 }

export default StepInput