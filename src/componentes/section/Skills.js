import styles from '../section/Skills.module.css'
import mongodb from '../../image/Skills/mongodb.svg'
import typescript from '../../image/Skills/typescript.svg'
import reactimg from '../../image/Skills/react-img.svg'
import javascript from '../../image/Skills/javascript-logo.svg'
import sql from '../../image/Skills/MySQL.svg'

function Skills (){
    return(
        <div id="Skills" className={styles.skills}>
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos</p>
            <div>
                <img src={reactimg}></img>
                <img src={typescript}></img>
                <img src={mongodb}></img>
                <img src={javascript}></img>
                <img src={sql}></img>
            </div>
        </div>
    )
}

export default Skills