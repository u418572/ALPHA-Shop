import styles from 'components/cart/Cart.module.scss'

function Freight({ option }) {
   

  return (
  
    <section className={styles.freightContainer}>
      <hr />
      <div className={styles.checkPrice}>
        <div className={styles.cartTotalOption}>{option}</div>
        <div className={styles.cartTotalPriec}>免費</div>
      </div>
      
    </section>
  )
}

export default Freight