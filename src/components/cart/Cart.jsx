import styles from 'components/cart/Cart.module.scss'
import CartProduct from 'components/cart/CartProduct'
import { Fragment } from 'react'
import CartTitle from 'components/cart/CartTitle'
import { Production } from 'components/cart/Production'
import CartTotal from 'components/cart/CartTotal'
import Freight from 'components/cart/Freight'
import { useState } from 'react'

function Testcart() {
  const [initData, setInitData] = useState(Production) 

  // 函式 代入對應的 id 為參數，如果id和 initData 的一樣。就改變 initData這個 id 裏的 quantity 
  // map 完後，會產生新的陣列，setInitData就可以享用了。
  function getPlusClick(id) {
    setInitData(initData.map(item => {           
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 }
      }
      return { ...item }
    }))
  }

  function getMinusClick(id) {
    setInitData(initData.map(item => {
      if (item.id === id) {
        return { ...item, quantity: (item.quantity === 0) ? 0 : item.quantity - 1 }
      }
      return { ...item }
    }))
  }

  let subTotal = 0;
  //用遍歷的方式將價錢加總起來
  initData.forEach(item => subTotal += item.price * item.quantity)

  console.log(initData)
  return (
    <Fragment   >
      <section className={styles.cartContainer}>
        <CartTitle />
        {initData.map(item => (
          <CartProduct
            data={item}
            //要注意這裏有參數的函式成為props 後，子層要怎麼使用
            plusClick={getPlusClick}
            minusClick={getMinusClick}
            //原來KEY 可以直接加在components  上面
            key={item.id} />
        ))}
        <Freight option='運費' freight={(subTotal > 1000) ? '免費' : ((subTotal === 0) ? '' : '60元')} />
        <CartTotal total={subTotal} option='小計' />
      </section>
    </Fragment>
  )
}

export default Testcart