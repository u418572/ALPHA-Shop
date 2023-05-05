import styles from './Cart.module.scss'
import {Fragment} from 'react'

function CartTotal({productDatas}) {
   let count = 0
   productDatas.forEach(item =>
     count += (Number(item.price))
   )
    
  return (
    
    <section className={styles.carTotalContainer}>
      <div className={styles.cartTotalContent}>運費</div>
      <div className={styles.cartTotalPriec}>{count}</div>
    </section>
  )
}

export default CartTotal