import styles from '../elements/ButtonB.module.css'

function ButtonB({text, link}){
    return(
        <div className={styles.btn}>
            <button>
                {text}{link}
            </button>
        </div>
    )
}

export default ButtonB