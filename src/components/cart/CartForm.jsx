import styles from 'components/cart/Cart.module.scss'
import ProductPrice from 'components/cart/ProductPrice'
import { useContext } from 'react'
import { CartContext } from 'components/Context/CartContext'
import ProductPhoto from 'components/cart/ProductPhoto'
import ProductName from 'components/cart/ProductName'

function CartForm() {
  const { initData, setInitData } = useContext(CartContext)
   return (
    <>
      <div className={styles.formContainer} >
        {initData.map(item => (
          <div className={styles.shopItem} key={item.id}>
            <ProductPhoto data={item} />
            <ProductName data={item} />
            <ProductPrice data={item} />
          </div>
        ))}
      </div>
    </>
  )
}
export default CartForm


