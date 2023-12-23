import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card'
import lpdnc from '../../image/projects/lpdnc.svg'
import portfolio from '../../image/projects/portfolio.svg'

function Projects() {
    return (
        <div className={styles.projects} id="Projects">
            <h1>Projetos</h1>
            <Card
            img={lpdnc}
            title='LP - DNC'
            tech='HTML, CSS, JS'
            description='Projeto Front-End para realizar pipipi e popo.'
            repo='https://github.com/PedroSilvDev-0'
            site='https://github.com/PedroSilvDev-0'
            />
            <Card
            img={portfolio}
            title='Portfólio React'
            tech='React'
            description='Projeto Front-End para realizar pipipi e popo.'
            repo='https://github.com/PedroSilvDev-0'
            site='https://github.com/PedroSilvDev-0'
            />
            <section>
                <ButtonB text='Ver repositório completo' link='https://github.com/PedroSilvDev-0' />
            </section>
        </div>
    )
}

export default Projects