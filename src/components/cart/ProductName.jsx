import styles from 'components/cart/Cart.module.scss'
import { ReactComponent as Minus } from 'assets/icons/minus.svg'
import { ReactComponent as Plus } from 'assets/icons/plus.svg'
import { useContext, useStatr } from 'react'
import { CartContext } from 'components/Context/CartContext'
import { GuestContext } from 'components/Context/GuestContext'

function ProductName({ data }) {
  const { initData, setInitData } = useContext(CartContext)
  const { guest, setGuest } = useContext(GuestContext)
  // 函式 代入對應的 id 為參數，如果id和 initData 的一樣。就改變 initData這個 id 裏的 quantity
  // map 完後，會產生新的陣列，setInitData就可以享用了。

  function addItem(id) {
    setInitData(initData.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 }
      }
      return { ...item }
    }))
   }
  
  // 要注意如果有參數的函式成為props 後，要怎麼給子層
  // 先在父層建立 props -> addClick={ getPlusClick } minusClick = { getMinusClick }
  // 子層自有的函式直接onClick = {() => minusItem(data.id)

  function minusItem(id) {
    setInitData(initData.map(item => {
      if (item.id === id) {
        return { ...item, quantity: (item.quantity === 0) ? 0 : item.quantity - 1 }
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