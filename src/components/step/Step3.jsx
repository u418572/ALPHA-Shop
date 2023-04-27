import styles from './Step.module.css'
import StepInput from './StepInput'
 
function Step3() {
  return (
    <div className={styles.stepContainer}>
      <div className={styles.title}>
        <h2>付款資訊</h2>
      </div>
      <div className={styles.formContainer}>
        <div className={styles.inputLine}>
           <StepInput type='text' title='持卡人姓名' inputStyle='inputSecond' content='John Doe' />
        </div>
        <div className={styles.inputLine}>
          <StepInput type='text' title='卡號' inputStyle='inputSecond' content='1111 2222 3333 4444' />
        </div>
        <div className={styles.inputLine}>
          <StepInput type='text' title='有效期限' inputStyle='inputThird' content='MM/YY' />
          <StepInput type='text' title='CVC' inputStyle='inputFouth' content='123' />
        </div>
       </div>
    </div>
  )
}

export default Step3