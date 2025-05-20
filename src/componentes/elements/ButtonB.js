import styles from '../elements/ButtonB.module.css'

function ButtonB({ text, link }) {
    return (
        <div className={styles.btn}>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <button>
                    {text}
                </button>
            </a>
        </div>
    )
}

export default ButtonB