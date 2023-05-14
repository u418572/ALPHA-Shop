import styles from 'components/cart/Cart.module.scss'
import { ReactComponent as Minus } from 'assets/icons/minus.svg'
import { ReactComponent as Plus } from 'assets/icons/plus.svg'


function ProductName({ product }) {

  return (
    <section className={styles.nameContainer}>
      <div className={styles.productName}>{product.name}</div>
      <div className={styles.nameIcon}>
        <div className={styles.iconBlock}>
          <Minus height='26' width='26' className={styles.setIcon} />
        </div>
        <span> {product.quantity}</span>
        <div className={styles.iconBlock}>
          <Plus height='26' width='26' className={styles.setIcon} />
        </div>
      </div>
    </section>
  )
}

export default ProductName