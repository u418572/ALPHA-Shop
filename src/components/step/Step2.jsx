import styles from './Step.module.css'
 
import Step2Input from './Step2Input'

function Step2() {
  return (
    <div className={styles.stepContainer}>
      <div className={styles.title}>
        <h2>運送方式</h2>
      </div>
      <div className={styles.formContainer}>
        <Step2Input type='radio' title='標準運送' inputStyle='inputFifth' content='約 3~7 個工作天' price='免費' />
        <Step2Input type='radio' title='DHL 貨運' inputStyle='inputFifth' content='48小時內送達' price='500' />
      </div>
    </div>
  )
}

export default Step2















