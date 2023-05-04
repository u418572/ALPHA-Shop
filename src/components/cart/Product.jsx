import styles from './Cart.module.scss'
import ProductPhoto from './ProductPhoto'
import ProductName from './ProductName'
import ProductPriec from './ProductPrice'

function Product () {
  return (
    <div>product 
      <ProductPhoto />
      <ProductName />
      <ProductPriec />
    </div>
  )
}

export default Product