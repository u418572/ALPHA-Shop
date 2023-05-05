import styles from './Cart.module.scss'

function ProductPrice({product}) {
  return (
    <section>
     <h2>{product.price}</h2>
    </section>
  )
}

export default ProductPrice