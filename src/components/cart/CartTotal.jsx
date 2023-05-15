import styles from 'components/cart/Cart.module.scss'

function CartTotal({ total, option }) {

  return (
     <section className={styles.freightContainer}>
      <hr />
      <div className={styles.checkPrice}>
        <div className={styles.cartTotalOption}>{option}</div>
        <div className={styles.cartTotalPriec}>${total}</div>
      </div>

    </section>
  )
}

export default CartTotal