import styles from 'components/progress/Progress.module.scss'
import Step1 from 'components/progress/Step1'
import Step2 from 'components/progress/Step2'
import Step3 from 'components/progress/Step3'




function ProgressForm({ title }) {

  return (
    <form action="" className={styles.formContainer}>
      {/* <Step1  title={title} /> */}
      {/* <Step2 title={title}/> */}
      <Step3 title={title} />
    </form>
  )
}

export default ProgressForm