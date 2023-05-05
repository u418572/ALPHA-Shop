import styles from './Cart.module.scss'
import { Fragment } from 'react'

function Freight({ productDatas }) {
  let count = 0
  let freight = '免費'
  productDatas.forEach(item =>
    count += (Number(item.price))
  )
  if (count < 500) {
      freight = 60
  }

  return (

    <section className={styles.freightContainer}>
      <div className={styles.cartTotalContent}>運費</div>
      <div className={styles.cartTotalPriec}>{freight}</div>
    </section>
  )
}

export default Freight