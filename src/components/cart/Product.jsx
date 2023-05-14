import styles from 'components/cart/Cart.module.scss'
import ProductPhoto from 'components/cart/ProductPhoto'
import ProductName from 'components/cart/ProductName'
import ProductPrice from 'components/cart/ProductPrice'
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