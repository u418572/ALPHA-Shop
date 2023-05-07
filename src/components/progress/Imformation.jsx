import Progress from 'components/progress/Progress'
import ProgressForm from 'components/progress/ProgressForm'
import { Titles } from 'components/progress/Titles'
import ProgressButton from 'components/progress/ProgressButton'

function Imformation() {
  return (
    <>
      <Progress />
      <ProgressForm title={Titles} />
      <ProgressButton step='確認下單'/>
    </>
  )
}

export default Imformation