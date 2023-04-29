import styles from './Control.module.css'
 
function PreviousButton(props) {
  return (
    <div >
      <button className={styles.controlButton}>
        {props.children}
        {props.content}
       </button>
     </div>
  )
}

export default PreviousButton
