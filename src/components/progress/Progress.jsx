import styles from './style.module.css'
import ProgressGroup from './ProgressGroup'
// import Icon from '../icons/Icon'
function Progress () {
const registerContent=[{number: '1', option: '寄送地址'},
                        {number: '2', option: '運送方式'},
                      {number: '3', option: '付款資訊'}]
  return(
       <div className={styles.container}>
        {registerContent.map((content) => {
          return(
            <ProgressGroup content={content} />
          )
         })}
        
      </div>
    
  )
}

export default Progress