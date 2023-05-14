import Progress from 'components/progress/Progress'
import ProgressForm from 'components/progress/ProgressForm'
import { Titles } from 'components/progress/Titles'
import ProgressButton from 'components/progress/ProgressButton'
import styles from 'components/progress/Progress.module.scss'

function Imformation() {
  return (
    <>
      <Progress />

      {/* <ProgressForm title={Titles} /> */}

      <form className={styles.formContainer}>

        <ProgressForm title={Titles} /> 
      </form>
      {/* <ProgressButton step='確認下單'/> */}
      <div>
        <section className={styles.buttonContainer}>
          <ProgressButton step='確認下單' />
        </section>
      </div>
     
    </>
  )
}

export default Imformation