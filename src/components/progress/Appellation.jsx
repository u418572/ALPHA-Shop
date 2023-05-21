import styles from 'components/progress/Progress.module.scss'

function Appellation({ title }) {
  return (
    <>
      <label htmlFor="">{title.appellation}</label>
      <select name="test" id="test" className={styles.citySelect} required='required' >
        <option value="">{title.mr}</option>
        <option value="">{title.ms}</option>
        <option value="">{title.mx}</option>
      </select>
    </>
  )
}

export default Appellation