import ButtonB from '../elements/ButtonB'
import styles from '../section/Projects.module.css'
import Cards from '../elements/Cards'
import lpdnc from '../../image/Projects/lpdnc.svg'
import coffeeDNC from '../../image/Projects/coffeeDNC.svg'
import newsDNC from '../../image/Projects/newsDNC.svg'

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
            <Cards
                img= {newsDNC}
                title='News DNC'
                tech='Node.JS e JS'
                description='Projeto realizado para crianção de uma API com rotas CRUD'
                repo=''
            />
            <Cards
                img= {coffeeDNC}
                title='Coffee DNC'
                tech='HTML, CSS e JS'
                description='Projeto realizado para treinar a implementação de displays flexs e grids'
                repo=''
            />
            <ButtonB 
                text='Acesse o repósitorio completo'
                repo= 'https://github.com/LuisCampelloSoares'
                />
        </div>
    )
}

export default Projects