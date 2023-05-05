import styles from './Cart.module.scss'

function ProductName({ product }) {

  return (
    <section>


      {/* <img src={item.img} alt="" /> */}
      <h3>{product.name}</h3>

    </section>
  )
}

export default ProductName