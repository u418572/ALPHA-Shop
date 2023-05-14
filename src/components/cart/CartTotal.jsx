import styles from 'components/cart/Cart.module.scss'

function CartTotal({productDatas, option}) {
   let count = 0
   productDatas.forEach(item =>
     count += (Number(item.price))
   )
    
  return (
    
    <section className={styles.freightContainer}>
      <hr />
      <div className={styles.checkPrice}>
        <div className={styles.cartTotalOption}>{option}</div>
        <div className={styles.cartTotalPriec}>${count}</div>
      </div>

    </section>
  )
}

export default CartTotal