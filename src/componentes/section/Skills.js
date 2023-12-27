import styles from './Skills.module.css'
import javascript from '../../image/skills/javascript.svg'
import html from '../../image/skills/html.svg'
import css from '../../image/skills/css.svg'
import typescript from '../../image/skills/typescript.svg'
import react from '../../image/skills/react.svg'

function Skills() {
    return (
        <div className={styles.skills} id="Skills">
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>

            <div>
                <img alt='Error' src={javascript}/>
                <img alt='Error' src={html}/>
                <img alt='Error' src={css}/>
                <img alt='Error' src={typescript}/>
                <img alt='Error' src={react}/>
            </div>
        </div>
    )
}

export default Skills