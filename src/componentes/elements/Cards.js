import styles from './Cards.module.css';
import ButtonB from './ButtonB'
import { useState } from 'react'

function Cards({img, title, tech, description, repo}){
    const [info, setInfo] = useState(false);
    function InfoOn(){
        setInfo(true)
        console.log("Mouse entered")
    };
    function InfoOff(){
        setInfo(false)
        console.log("Mouse left")
    };

    console.log("Current info state:", info);
    return(
        <div onMouseLeave={InfoOff} className={styles.cards}>
            <a onMouseEnter={InfoOn} href={repo}> <img src={img} alt='Imagem do projeto'></img></a>
            {info === true &&(
                <section>
                    <h3>{title}</h3>
                    <p><strong>Tecnologia: </strong>{tech}</p>
                    <p>{description}</p>
                    <ButtonB text='Acesse o repositório'/>
                </section>
            )}
        </div>
        
    )
}

export default Cards