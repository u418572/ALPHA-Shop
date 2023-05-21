import styles from 'components/cart/Cart.module.scss'
import CartProduct from 'components/cart/ProductName'
import { Fragment } from 'react'
import CartTitle from 'components/cart/CartTitle'
import { Production } from 'components/cart/Production'
import CartTotal from 'components/cart/CartTotal'
import Freight from 'components/cart/Freight'
import { useState, useContext } from 'react'
import CartForm from 'components/cart/CartForm'
import { CartContext } from 'components/cart/CartContext'
function Testcart() {
  const [initData, setInitData] = useState(Production)
  console.log('這是Cart的:',initData)
  
  let subTotal = 0;
  //用遍歷的方式將價錢加總起來
  initData.forEach(item => subTotal += item.price * item.quantity)

  // console.log(initData)
  return (
    <Fragment   >
      <CartContext.Provider value={{ initData, setInitData }}>
        <section className={styles.cartContainer}>                
            <CartTitle />
            <CartForm />

        
          {/* {initData.map(item => (
            <CartProduct
              data={item}
              //要注意這裏有參數的函式成為props 後，子層要怎麼使用
              plusClick={getPlusClick}
              minusClick={getMinusClick}
              //原來KEY 可以直接加在components  上面
              key={item.id} />
          ))} */}
          <Freight option='運費' freight={(subTotal > 1000) ? '免費' : ((subTotal === 0) ? '滿600免運費' : '60元')} />
          <CartTotal total={subTotal} option='小計' />
        </section>


      </CartContext.Provider>






    </Fragment>
  )
}

export default Testcart