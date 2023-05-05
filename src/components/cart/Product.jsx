import styles from './Cart.module.scss'
import ProductPhoto from './ProductPhoto'
import ProductName from './ProductName'
import ProductPrice from './ProductPrice'
import { Fragment } from 'react'

 function Product({ productDatas }) {
  return (
    <Fragment   >
      {productDatas.map(item => {
        return (
          <div className={styles.productContainer} key={item.id}>
            <ProductPhoto product={item} />
            <ProductName product={item} />
            <ProductPrice product={item} />
          </div>

        )
      })}
    </Fragment>
  )
}

export default Product