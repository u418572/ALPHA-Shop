import styles from 'components/cart/Cart.module.scss'

 function ProductPrice({product}) {
  return (
    <section className={styles.priceLayout}>
      <h3>${product.price}</h3>
    </section>
  )
}

export default ProductPrice