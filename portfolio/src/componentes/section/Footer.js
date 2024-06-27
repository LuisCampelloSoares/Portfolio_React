import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'


function Footer (){
    return(
        <div className={styles.footer}>
            <ul>
                <li><a  target='blank' href='https://www.instagram.com/l_fsoares/'><FaInstagram size={30}/></a></li>
                <li><a  target='blank' href='https://github.com/LuisCampelloSoares'><FaGithub size={30}/></a></li>
                <li><a  target='blank' href='https://www.linkedin.com/in/luis-felipe-campello-soares-689870236/'><FaLinkedin size={30}/></a></li>
            </ul>
            <div>
                <p>Luisoares2901@gmail.com</p>
            </div>
            <div>
                <p>Luis Felipe © 2024</p>
            </div>
        </div>
    )
}

export default Footer