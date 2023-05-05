import styles from './Cart.module.scss'

function ProductPhoto({product}) {
  return (
    <section>
      <img src={product.img} alt="" className={styles.productPhoto}/>
    </section>
      
     
    
  )
}

export default ProductPhoto