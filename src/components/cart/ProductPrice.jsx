import styles from 'components/cart/Cart.module.scss'

 function ProductPrice({data}) {
  return (
    <section className={styles.priceLayout}>
      <h3>${data.price}*{data.quantity}</h3>
    </section>
  )
}

export default ProductPrice