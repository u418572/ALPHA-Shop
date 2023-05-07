import styles from 'components/progress/Progress.module.scss'
import { Cities } from 'components/progress/Cities'


function CitySelect({title}) {
  const allCities = Cities.map(item => item)

  return (
    <>
      <label htmlFor="">{title.cities}</label>
      <select name="" id="" className={styles.citySelect}  >
        {allCities.map(item =>
          <option key={item.id} value={item.value}>{item.name}</option>
        )
        }
      </select>
    </>
  )
}

export default CitySelect