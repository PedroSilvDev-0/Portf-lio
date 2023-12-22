import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import ButtonB from '../elements/ButtonB'

function Presentation() {
    return (
        <div className={styles.presentation} id="Presentation">
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>

            <h1>Olá, eu sou Ryan Silva!</h1>

            <p>Sou um apaixonado por tecnologia e soluções inovadoras.Como Product Manager, eu tenho o compromisso de resolver problemas complexos e trazer resultados excepcionais para os negócios. Meus projetos já geraram milhões de reais em receita anualestou sempre em busca de novos desafios para superar.</p>

            <ButtonA link='https://github.com/PedroSilvDev-0' text='Conecte-se comigo!'/>

            <ButtonB text='Botão B'/>
        </div>
    )
}

export default Presentation