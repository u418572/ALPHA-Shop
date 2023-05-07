import styles from 'components/progress/Progress.module.scss'
import CitySelect from 'components/progress/CitySelect'
import Appellation from './Appellation'
 
function Step1({ title }) {
  return (
    <form className={styles.formContainer}>
      <div className={styles.formTitle}>{title.expressAddress}</div>
      <div className={styles.stepContainer}>
       
        <div className={styles.formBlock}>
          <div className={styles.cityGroup}>
            <Appellation title={title} />
          </div>
          <div className={styles.addressGroup}>
            <label htmlFor="name">{title.name}</label>
            <input type="text" name='name' className={styles.addressInput} placeholder={title.namePlace} />
          </div>
        </div>

        <div className={styles.formBlock}>
          <div className={styles.telGroup}>
            <label htmlFor="name">{title.tel}</label>
            <input type="number" name='name' className={styles.telInput} placeholder={title.telPlace} />
          </div>
          <div className={styles.telGroup}>
            <div className={styles.telGroup}>
              <label htmlFor="name">{title.email}</label>
              <input type="email" name='name' className={styles.telInput} placeholder={title.emailPlace} />
            </div>
          </div>
        </div>

        <div className={styles.formBlock}>
          <div className={styles.cityGroup}>
            <CitySelect title={title} />
          </div>
          <div className={styles.addressGroup}>
            <label htmlFor="name">{title.address}</label>
            <input type="text" name='name' className={styles.addressInput} placeholder='請輸入地址' />
          </div>
        </div>
      </div>
    </form>
  )
}

export default Step1