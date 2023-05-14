import {useState} from 'react'
import styles from 'components/cart/Cart.module.scss'
import CartTitle from 'components/cart/CartTitle'
import CartTotal from 'components/cart/CartTotal'
import Product from 'components/cart/Product'
import Freight from 'components/cart/Freight'
import ImgProduct1 from 'assets/images/product-1.jpg'
import ImgProduct2 from 'assets/images/product-1.jpg'

let content = [
  {
    id: '1',
    name: '破壞補丁修身牛仔褲',
    img: ImgProduct1,
    price: 3999,
    quantity: 1,
  },
  {
    id: '2',
    name: '刷色直筒牛仔褲',
    img: ImgProduct2,
    price: 1299,
    quantity: 1,
  },
]

 

function Cart() {
  let datas = content.map(item => item)
  return (
    <section className={styles.cartContainer}>
      <CartTitle />
      <Product productDatas={datas} />
      <Freight productDatas={datas} option='運費'/>
      <CartTotal productDatas={datas} option='小計'/>
 
    </section>
  )
}

export default Cart