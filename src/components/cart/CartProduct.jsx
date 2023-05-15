import styles from 'components/cart/Cart.module.scss'
import { ReactComponent as Minus } from 'assets/icons/minus.svg'
import { ReactComponent as Plus } from 'assets/icons/plus.svg'
import ProductPrice from 'components/cart/ProductPrice'
//import { useState } from 'react'
import ProductPhoto from 'components/cart/ProductPhoto'

function CartProduct({ plusClick, minusClick, data }) {
  
  return (
    <>
      <div className={styles.productContainer} >
        <ProductPhoto data={data} />
        <section className={styles.nameContainer}>
          <div className={styles.productName}>{data.name}</div>
          <div className={styles.nameIcon}>
            <div className={styles.iconBlock} >
              <Minus height='26' width='26' className={styles.setIcon} onClick={() => minusClick(data.id)}/>
            </div>
            <span>{data.quantity}</span>
            <div className={styles.iconBlock}>
              <Plus height='26' width='26' className={styles.setIcon} onClick={() => plusClick(data.id)} />
            </div>
          </div>
        </section>
        <ProductPrice product={data} amount={data.quantity} />

      </div>


    </>

  )
}
export default CartProduct