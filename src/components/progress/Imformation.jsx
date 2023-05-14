import { useState } from 'react'
import Progress from 'components/progress/Progress'
import { Titles } from 'components/progress/Titles'
import ProgressButton from 'components/progress/ProgressButton'
import styles from 'components/progress/Progress.module.scss'
import Step1 from 'components/progress/Step1'
import Step2 from 'components/progress/Step2'
import Step3 from 'components/progress/Step3'

function Imformation() {
  const [count, setCount] = useState(1)
  function nextClick() {
    if (count < 4 && count >= 1) {
      setCount(n => n + 1)
    }
    if (count === 3) {
      alert('感謝下單!!')
    }
  }

  function prevClick() {
    if (count <= 4 && count > 1) {
      setCount(n => n - 1)
    }

  }

  return (
    <>
      <Progress icon={count} />
      <form className={styles.formContainer}>
        {count === 1 && <Step1 title={Titles} />}
        {count === 2 && <Step2 title={Titles} />}
        {count === 3 && <Step3 title={Titles} />}
      </form>
      <ProgressButton step={count}
        nextClick={nextClick}
        prevClick={prevClick}
      />
    </>
  )
}

export default Imformation