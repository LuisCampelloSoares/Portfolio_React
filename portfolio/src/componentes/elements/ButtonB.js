import styles from '../elements/ButtonB.module.css'

function ButtonB({text}){
    return(
        <div className={styles.btn}>
            <button>{text}</button>
        </div>
    )
}

export default ButtonB