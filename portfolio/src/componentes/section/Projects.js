import ButtonB from '../elements/ButtonB'
import styles from '../section/Projects.module.css'
import Cards from '../elements/Cards'
import lpdnc from '../../image/Projects/lpdnc.svg'

function Projects (){
    return(
        <div id="Projects" className={styles.projects}>
            <h1>Projetos</h1>
            <Cards 
                img={lpdnc}
                title='Landing Page'
                tech='HTML, CSS e JS'
                description='Projeto realizado para treinar a implementação de displays flexs e grids'
                repo=''
            />
            <ButtonB text='Acesse o repósitorio completo'/>
        </div>
    )
}

export default Projects