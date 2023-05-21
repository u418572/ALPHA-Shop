import styles from 'components/cart/Cart.module.scss'
import { ReactComponent as Minus } from 'assets/icons/minus.svg'
import { ReactComponent as Plus } from 'assets/icons/plus.svg'
import { useContext } from 'react'
import { CartContext } from 'components/cart/CartContext'

function ProductName({data}) {
  const { initData, setInitData } = useContext(CartContext)
 // 函式 代入對應的 id 為參數，如果id和 initData 的一樣。就改變 initData這個 id 裏的 quantity
  // map 完後，會產生新的陣列，setInitData就可以享用了。
  function addItem(id) {
    setInitData(initData.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 }
      }
      return { ...item }
    })
    )
  }

  function minusItem(id) {
    setInitData(initData.map(item => {
      if (item.id === id) {
        return { ...item, quantity:(item.quantity===0)? 0 : item.quantity -1 }
      }
      return { ...item }
    })
    )
  }

  return (
    <>
      <section className={styles.nameContainer}>
        <div className={styles.productName}>{data.name}</div>
        <div className={styles.nameIcon}>
          <div className={styles.iconBlock} >
            <Minus height='26' width='26' className={styles.setIcon} onClick={() => minusItem(data.id)} />
          </div>
          <span>{data.quantity}</span>
          <div className={styles.iconBlock}>
            <Plus height='26' width='26' className={styles.setIcon} onClick={() => addItem(data.id)} />
          </div>
        </div>
      </section>
    </>

  )
}
export default ProductName