import styles from './Step.module.css'
import StepInput from './StepInput'
import StepSelect from './StepSelect'

function Step1() {
  return (
     <div className={styles.stepContainer}>
      <div className={styles.title}>
        <h2>寄送地址</h2>
      </div>
      <div className={styles.formContainer}>
        <div className={styles.inputLine}>
          <StepSelect title='稱謂' inputStyle='inputFirst' inputSpace='space' >
            <option value="mr" selected>先生</option>
            <option value="ms">女士</option>
            <option value="mx">不明</option>
          </StepSelect>
          <StepInput type='text' title='姓名' inputStyle='inputSecond' content='請輸入姓名' />
        </div>
        <div className={styles.inputLine}>
          <StepInput type='tel' title='電話' inputStyle='inputThird' content='請輸入行動電話'/>
          <StepInput type='email' title='Email' inputStyle='inputFouth' content='請輸入電子郵件' />
        </div>
        <div className={styles.inputLine}>
          <StepSelect title='縣市' inputStyle='inputFirst' inputSpace='space' >
            <option value="">請選擇縣市</option>
            <option value="KLU">基隆市</option>
            <option value="TPH">新北市</option>
            <option value="TPE">臺北市</option>
            <option value="TYC">桃園市</option>
            <option value="HSH">新竹縣</option>
            <option value="HSC">新竹市</option>
            <option value="MAC">苗栗市</option>
            <option value="MAL">苗栗縣</option>
            <option value="TXG">臺中市</option>
            <option value="CWH">彰化縣</option>
            <option value="CWS">彰化市</option>
            <option value="NTC">南投市</option>
            <option value="NTO">南投縣</option>
            <option value="YLH">雲林縣</option>
            <option value="CHY">嘉義縣</option>
            <option value="CYI">嘉義市</option>
            <option value="TNN">臺南市</option>
            <option value="KHH">高雄市</option>
            <option value="IUH">屏東縣</option>
            <option value="PTS">屏東市</option>
            <option value="ILN">宜蘭縣</option>
            <option value="ILC">宜蘭市</option>
            <option value="HWA">花蓮縣</option>
            <option value="HWC">花蓮市</option>
            <option value="TTC">臺東市</option>
            <option value="TTT">臺東縣</option>
            <option value="PEH">澎湖縣</option>
            <option value="KMN">金門縣</option>
            <option value="LNN">連江縣</option>
          </StepSelect>
           <StepInput type='text' title='地址' inputStyle='inputSecond' content='請輸入地址' />
        </div>
       </div>
     </div>
   )
}

export default Step1















