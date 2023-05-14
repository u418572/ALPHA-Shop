import styles from 'components/progress/Progress.module.scss'

function Step3({ title }) {
  return (
    <>
      <div className={styles.formTitle}>{title.creditTitle}</div>
      <div className={styles.step3Container}>
        <div className={styles.formBlock}>
          <div className={styles.addressGroup}>
            <label htmlFor="name">{title.creditName}</label>
            <input type="text" name='name' className={styles.addressInput} placeholder={title.namePlace} />
          </div>
        </div>
        <div className={styles.formBlock}>
          <div className={styles.addressGroup}>
            <label htmlFor="name">{title.cardNumber}</label>
            <input type="text" name='name' className={styles.addressInput} placeholder={title.creditNumber} />
          </div>
        </div>
        <div className={styles.formBlock}>
          <div className={styles.telGroup}>
            <label htmlFor="name">{title.expiration}</label>
            <input type="text" name='name' className={styles.telInput} placeholder={title.creditDate} />
          </div>
          <div className={styles.telGroup}>
            <div className={styles.telGroup}>
              <label htmlFor="name">{title.cvc}</label>
              <input type="number" name='name' className={styles.telInput} placeholder={title.cvcContent} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Step3