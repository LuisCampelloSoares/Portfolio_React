import styles from './Presentation.module.css';
import ButtonA from '../elements/ButtonA';
import {useEffect, useState} from 'react';

function Presentation (){
    const [text, setText] = useState('');
    const toRotate = ['Luís Felipe', 'Desenvolvedor FullStack'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 150;
    const [delta, setDelta] = useState(100);
    
    useEffect(() => {
        let ticker = setInterval(()=>(
            toType()
        ), delta)
        return()=> {clearInterval(ticker)}
    }, [text]);
    
    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0,text.length-1): fullText.substring(0,text.length+1)
        setText(updatedText);
        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }

    return(
        <div id="Presentation" className={styles.presentation}> 
            <p><strong>Bem-vindo ao meu Portfólio</strong></p>
            <h1>Olá, eu sou {text} </h1>
            <p>Sou apaixonado por tecnologia. Como desenvolvedor em busca de minha primeira experiência<br></br>
                profissional, desenvolvi projetos em Front-end e Back-end. Adoro novos desafios e resolver<br></br>
                problemas e trazer soluções completas e entregas rápidas
            </p>
            <a href='https://www.linkedin.com/in/luis-felipe-campello-soares-689870236/' target="_blank"><ButtonA text='Conecte-se comigo!!' /></a>
        </div>
    )
    
}

export default Presentation