import styles from './Cards.module.css';
import ButtonB from './ButtonB'
import { useState } from 'react'

function Cards({img, title, tech, description, repo, status}){
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
                   <h2 className={styles.title}>
                        {title}
                        {status && (
                            <span className={styles.statusBadge}>
                                {status}
                            </span>
                        )}
                    </h2>
                    <p><strong>Tecnologia: </strong>{tech}</p>
                    <p>{description}</p>
                    <a href={repo} target="_blank"  >  
                        <ButtonB text='Acesse o repositório'/>
                    </a>
                   
                </section>
            )}
        </div>
        
    )
}

export default Cards