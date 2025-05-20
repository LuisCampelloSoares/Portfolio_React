import ButtonB from '../elements/ButtonB'
import styles from '../section/Projects.module.css'
import Cards from '../elements/Cards'
import lpdnc from '../../image/Projects/lpdnc.svg'
import coffeeDNC from '../../image/Projects/coffeeDNC.svg'
import blockchain from '../../image/Projects/blockchain.svg'
import newsDNC from '../../image/Projects/newsDNC.svg'

function Projects (){
    return(
        <div id="Projects" className={styles.projects}>
            <h1>Projetos</h1>
            <Cards 
                img={lpdnc}
                title='Landing Page'
                tech='HTML, CSS e JS'
                description='Projeto responsivo de landing page desenvolvido com foco em UI/UX. Implementei displays flex e grid para garantir layout adaptável em diferentes dispositivos. Possui seções de hero, features e formulário de contato com validação em JavaScript.'
                repo=''
            />
            <Cards
                img= {newsDNC}
                title='News DNC'
                tech='Node.JS e JS'
                description='API completa de portal de notícias com arquitetura MVC e banco de dados MongoDB. Implementei rotas CRUD, autenticação JWT, sistema de favoritos e categorização de conteúdo. O projeto inclui testes automatizados e documentação com Swagger'
                repo='https://github.com/LuisCampelloSoares/DNC-News'
                link='https://github.com/LuisCampelloSoares/DNC-News'
            />
            <Cards
                img= {coffeeDNC}
                title='Coffee DNC'
                tech='HTML, CSS e JS'
                description='E-commerce de café com catálogo de produtos, carrinho de compras interativo e sistema de filtragem. Utilizei manipulação avançada de DOM e armazenamento local para persistência de dados. O design responsivo segue princípios de acessibilidade e boas práticas de UX'
                repo='https://github.com/LuisCampelloSoares/CoffeeDNC'
                link='https://github.com/LuisCampelloSoares/CoffeeDNC'
            />
            <Cards
                img= {blockchain}
                title='BlockChain - 'status='Em desenvolvimento' // ou 'Em construção', ou 'Breve'
                tech='Java'
                description='Implementação de sistema blockchain simplificado com algoritmos de hash SHA-256 e proof-of-work. O projeto demonstra conceitos fundamentais de criptografia, consenso distribuído e integridade de dados. Inclui interface para visualização da cadeia e validação de transações'
                repo='https://github.com/LuisCampelloSoares/BlockChain'
                link='https://github.com/LuisCampelloSoares/BlockChain'
                

            />
            <ButtonB 
                text='Acesse o repósitorio completo'
                repo= 'https://github.com/LuisCampelloSoares'
                />
        </div>
    )
}

export default Projects