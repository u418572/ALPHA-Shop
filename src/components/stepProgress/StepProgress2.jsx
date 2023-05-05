import styles from './StepProgress.module.css'
import ProgressGroup from './StepProgressGroup'
import { Fragment } from 'react'

// import Icon from '../icons/Icon'
const registerContent = [{ number: '1', option: '寄送地址', step: 'address' },
{ number: '2', option: '運送方式', step: 'way' },
{ number: '3', option: '付款資訊', step: 'payment' }]
function StepProgress2() {
  
  return (
    <div className={styles.progressContainer}>
      {/* <div className={styles.progressTitle}>結帳
      </div> */}
      <div className={styles.container} id='step2'>
        {registerContent.map((content) => {
          return (
            <Fragment key={content.number}>
            <ProgressGroup content={content} />
            </Fragment>
          )
        })}
      </div>



    </div>


  )
}

export default StepProgress2