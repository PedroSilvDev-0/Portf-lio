import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <li> <a href=''> <FaInstagram size={30}/> </a> </li>
                <li> <a href=''> <FaLinkedin size={30}/> </a> </li>
                <li> <a href='https://github.com/PedroSilvDev-0'> <FaGithub size={30}/> </a> </li>
            </ul>
            <p>silvsrhyan@gmail.com</p>
            <p>Ryan Silva © 2023</p>
        </div>
    )
}

export default Footer