import styles from 'components/cart/Cart.module.scss'

function Freight({freight, option }) {
   

  return (
  
    <section className={styles.freightContainer}>
      <hr />
      <div className={styles.checkPrice}>
        <div className={styles.cartTotalOption}>{option}</div>
        <div className={styles.cartTotalPriec}>{freight}</div>
      </div>
      
    </section>
  )
}

export default Freight