import styles from '../elements/ButtonA.module.css'

function ButtonA({text, link}){
    return(
        <div className={styles.btn}><a target='blank' href={link}>
            <button>{text}</button>
        </a></div>
    )
}

export default ButtonA