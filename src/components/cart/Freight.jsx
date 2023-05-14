import styles from 'components/cart/Cart.module.scss'

function Freight({ productDatas, option }) {
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
      <hr />
      <div className={styles.checkPrice}>
        <div className={styles.cartTotalOption}>{option}</div>
        <div className={styles.cartTotalPriec}>{freight}</div>
      </div>
      
    </section>
  )
}

export default Freight