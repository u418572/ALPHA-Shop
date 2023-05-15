import styles from 'components/cart/Cart.module.scss'

function ProductPhoto({data}) {
  return (
    <section>
      <img src={data.img} alt="" className={styles.productPhoto}/>
    </section>
   )
}

export default ProductPhoto