import styles from 'components/cart/Cart.module.scss'

function ProductPhoto({product}) {
  return (
    <section>
      <img src={product.img} alt="" className={styles.productPhoto}/>
    </section>
      
     
    
  )
}

export default ProductPhoto