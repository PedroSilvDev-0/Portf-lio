import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card'

function Projects() {
    return (
        <div className={styles.projects} id="Projects">
            <h1>Projetos</h1>
            <p>Cards</p>
            <Card/>
            <Card/>
            <Card/>
            <ButtonB text='Acesse meu repositório' link='https://github.com/PedroSilvDev-0' />
        </div>
    )
}

export default Projects