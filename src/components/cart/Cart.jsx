import styles from './Cart.module.scss'
import CartTitle from './CartTitle'
import CartTotal from './CartTotal'
import Product from './Product'

function Cart () {
  return (
    <section className={styles.cartContainer}>
       <CartTitle />
       
        <Product />
        
        <CartTotal />
      
      
    </section>
  )
}

export default Cart