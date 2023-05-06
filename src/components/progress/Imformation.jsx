import styles from 'components/progress/Progress.module.scss'
import Progress from 'components/progress/Progress'
import ProgressForm from 'components/progress/ProgressForm'


function Imformation() {
  return (
    <>
      <Progress />
      <ProgressForm title='寄送地址'/>
    </>
  )
}

export default Imformation