import styles from 'components/progress/Progress.module.scss'
import Step1 from 'components/progress/Step1'
import {Title} from 'components/progress/Title' //all titles



function ProgressForm(props) {
  const titleCollection = Title.map(item =>item)
  return (
    <form action="" className={styles.formContainer}>
      <div className={styles.formTitle}>{props.title}</div>
      <Step1 title={titleCollection}/>
      
     </form>
    )
}

export default ProgressForm