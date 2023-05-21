import styles from 'components/progress/Progress.module.scss'
 import { useContext} from 'react'
 import {GuestContext} from 'components/Context/GuestContext'
 
function Step3({ title }) {
  const {guest, setGuest} = useContext(GuestContext)
   
  return (
    <>
      <div className={styles.formTitle}>{title.creditTitle}</div>
      <div className={styles.step3Container}>
        <div className={styles.formBlock}>
          <div className={styles.addressGroup}>
            <label htmlFor="name">{title.creditName}</label>
            <input type="text" name='name' className={styles.addressInput} placeholder={title.namePlace} vlaue='' id='name' onChange={e =>setGuest({...guest,name: e.target.value}) } />
          </div>
        </div>
        <div className={styles.formBlock}>
          <div className={styles.addressGroup}>
            <label htmlFor="name">{title.cardNumber}</label>
            <input type="text" name='name' id='cardNumber' className={styles.addressInput} placeholder={title.creditNumber} onChange={e => setGuest({ ...guest, number: e.target.value })} />
          </div>
        </div>
        <div className={styles.formBlock}>
          <div className={styles.telGroup}>
            <label htmlFor="name">{title.expiration}</label>
            <input type="text" name='name' id='expired' className={styles.telInput} placeholder={title.creditDate} onChange={e => setGuest({ ...guest, expired: e.target.value })} />
          </div>
          <div className={styles.telGroup}>
            <div className={styles.telGroup}>
              <label htmlFor="name">{title.cvc}</label>
              <input type="number" name='name' id='cvc' className={styles.telInput} placeholder={title.cvcContent} onChange={e => setGuest({ ...guest, cvc: e.target.value })} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Step3