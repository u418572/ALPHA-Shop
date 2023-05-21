import styles from 'components/cart/Cart.module.scss'
import CartTitle from 'components/cart/CartTitle'
import CartTotal from 'components/cart/CartTotal'
import Freight from 'components/cart/Freight'
import CartForm from 'components/cart/CartForm'

function Testcart({ subTotal }) {

  return (
    <div className="secondarySection">

      <section className={styles.cartContainer}>
        <CartTitle />
        <CartForm />
        <Freight option='運費' freight={(subTotal > 1000) ? '免費' : ((subTotal === 0) ? '滿600免運費' : '60元')} />
        <CartTotal total={subTotal} option='小計' />
      </section>

    </div>
  )
}

export default Testcart