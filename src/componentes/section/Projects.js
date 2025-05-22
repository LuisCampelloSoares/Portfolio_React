import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Cards from '../elements/Cards'
import lpdnc from '../../image/Projects/lpdnc.svg'
import coffeeDNC from '../../image/Projects/coffeeDNC.svg'
import blockchain from '../../image/Projects/blockchain.svg'
import newsDNC from '../../image/Projects/newsDNC.svg'

function Projects (){
    return(
        <div id="Projects" className={styles.projects}>
            <h1>Projetos</h1>
            <div className={styles.cardsGrid}>
                <Cards 
                    img={lpdnc}
                    title='Landing Page'
                    tech='HTML, CSS e JS'
                    description='Projeto responsivo de landing page desenvolvido com foco em UI/UX.'
                    repo=''
                />
                <Cards
                    img={newsDNC}
                    title='News DNC'
                    tech='Node.JS e JS'
                    description='API completa de portal de notícias com arquitetura MVC e banco de dados MongoDB.'
                    repo='https://github.com/LuisCampelloSoares/DNC-News'
                    link='https://github.com/LuisCampelloSoares/DNC-News'
                />
                <Cards
                    img={coffeeDNC}
                    title='Coffee DNC'
                    tech='HTML, CSS e JS'
                    description='E-commerce de café com catálogo de produtos e carrinho de compras interativo.'
                    repo='https://github.com/LuisCampelloSoares/CoffeeDNC'
                    link='https://github.com/LuisCampelloSoares/CoffeeDNC'
                />
                <Cards
                    img={blockchain}
                    title='BlockChain'
                    status='Em desenvolvimento' 
                    tech='Java'
                    description='Implementação de sistema blockchain simplificado com algoritmos de hash SHA-256.'
                    repo='https://github.com/LuisCampelloSoares/BlockChain'
                    link='https://github.com/LuisCampelloSoares/BlockChain'
                />
            </div>
            <ButtonB 
                text='Acesse o repósitorio completo'
                repo='https://github.com/LuisCampelloSoares'
            />
        </div>
    )
}

export default Projects