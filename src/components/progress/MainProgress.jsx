 import Progress from 'components/progress/Progress'
import { Titles } from 'components/progress/Titles'
import ProgressButton from 'components/progress/ProgressButton'
import styles from 'components/progress/Progress.module.scss'
import Step1 from 'components/progress/Step1'
import Step2 from 'components/progress/Step2'
import Step3 from 'components/progress/Step3'
import { useState, useContext } from 'react'
import { GuestContext } from 'components/Context/GuestContext'

function MainProgress() {
  const { guest, setGuest } = useContext(GuestContext)
  const [count, setCount] = useState(1)
  function nextClick() {
    if (count < 4 && count >= 1) {
      setCount(n => n + 1)
    }
    if (count === 3) {
      alert('感謝下單!!',guest)
      console.log('這次的作業4/4', guest)
    }
  }

  function prevClick() {
    if (count <= 4 && count > 1) {
      setCount(n => n - 1)
    }

  }

  return (
    <>
      <div className="primarySection">
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
      </div>
    </>
  )
}

export default MainProgress