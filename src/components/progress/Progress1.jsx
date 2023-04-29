import StepProgress from '../stepProgress/StepProgress'
import Step1 from '../step/Step1'
import CheckOne from '../progressControl/ControlOne'
import styles from './Progress.module.css'

function Progress1 () {
  return (
     <div className={styles.progressContainer}>
      <StepProgress />
      <Step1 />
      <CheckOne />
     </div>
   )
}

export default Progress1
