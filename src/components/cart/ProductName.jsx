import styles from 'components/cart/Cart.module.scss'
import { ReactComponent as Minus } from 'assets/icons/minus.svg'
import { ReactComponent as Plus } from 'assets/icons/plus.svg'
import ProductPrice from 'components/cart/ProductPrice'
import {useState} from 'react'
import ProductPhoto from 'components/cart/ProductPhoto'
 
function ProductName({ product}) {
       const [amount, setAmount] = useState(product.quantity)

       function plusClick() {
          setAmount(n => n + 1)
       }
       
       function minusClick() {
          if(amount > 0) {
            setAmount(n => n -1)
          }
       }
   return (
    <>
      
      <div className={styles.productContainer}>
        <ProductPhoto product={product} />
        <section className={styles.nameContainer}>
          <div className={styles.productName}>{product.name}</div>
          <div className={styles.nameIcon}>
            <div className={styles.iconBlock} >
              <Minus height='26' width='26' className={styles.setIcon} onClick={minusClick} />
            </div>

            <span>{amount}</span>
            <div className={styles.iconBlock}>
              <Plus height='26' width='26' className={styles.setIcon} onClick={plusClick} />
            </div>
          </div>
        </section>
        <ProductPrice product={product} amount={amount} />

      </div>
      
    </>
    
  )
}
export default ProductName