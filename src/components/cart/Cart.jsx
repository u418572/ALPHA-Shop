import styles from 'components/cart/Cart.module.scss'
import ProductName from 'components/cart/ProductName'
import { Fragment } from 'react'
import CartTitle from 'components/cart/CartTitle'
import { Production } from 'components/cart/Production'
import CartTotal from 'components/cart/CartTotal'
import Freight from 'components/cart/Freight'
import {useState} from 'react'

function Cart() {
  let datas = Production.map(item => item)
  
  return (
    <Fragment   >
      <section className={styles.cartContainer}>
        <CartTitle />
        {datas.map(item => {
          return (
            <div className={styles.productContainer} key={item.id}>
              <ProductName
                product={item} />
            </div>
          )
        })}
        <Freight option='運費' />
        <CartTotal productDatas={datas} option='小計' />
      </section>


    </Fragment>
  )
}

export default Cart