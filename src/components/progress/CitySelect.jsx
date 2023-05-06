import styles from 'components/progress/Progress.module.scss'
import { Cities } from 'components/progress/Cities'


function CitySelect() {
  const allCities = Cities.map(item => item)

  return (
    <>
      <label htmlFor="">稱謂</label>
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