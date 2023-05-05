import styles from './Cart.module.scss'
import { MdAttachMoney } from 'react-icons/md'
function ProductPrice({product}) {
  return (
    <section className={styles.priceLayout}>
      <h3>${product.price}</h3>
    </section>
  )
}

export default ProductPrice