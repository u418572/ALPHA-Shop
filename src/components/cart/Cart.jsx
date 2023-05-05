import styles from './Cart.module.scss'
import CartTitle from './CartTitle'
import CartTotal from './CartTotal'
import Product from './Product'
import Freight from './Freight'

let content = [
  {
    id: '1',
    name: '破壞補丁修身牛仔褲',
    img: 'https://picsum.photos/300/300?text=1',
    price: 400,
    quantity: 2,
  },
  {
    id: '2',
    name: '刷色直筒牛仔褲',
    img: 'https://picsum.photos/300/300?text=2',
    price: 800,
    quantity: 1,
  },
]

function Cart() {
  let datas = content.map(item => item)
  return (
    <section className={styles.cartContainer}>
      <CartTitle />
      <Product productDatas={datas} />
      <Freight productDatas={datas} />
      <CartTotal productDatas={datas} />
    </section>
  )
}

export default Cart