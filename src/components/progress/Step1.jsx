import styles from 'components/progress/Progress.module.scss'
import CitySelect from 'components/progress/CitySelect'

function Step1() {
  return (
    <>
    <div className={styles.stepContainer}>
      <div className={styles.formBlock}>
          <div className={styles.cityGroup}>
            
              <CitySelect />
          </div>

            
            <div className={styles.addressGroup}>
              <label htmlFor="name">地址</label>
              <input type="text" name='name' className={styles.addressInput} placeholder='請輸入地址' />
            

            
          </div>
      </div>
       



    </div>
    </>
  )
}

export default Step1