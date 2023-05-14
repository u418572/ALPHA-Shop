import styles from 'components/cart/Cart.module.scss'

 function ProductPrice({product, amount}) {
  return (
    <section className={styles.priceLayout}>
      <h3>${product.price}*{amount}</h3>
    </section>
  )
}

export default ProductPrice