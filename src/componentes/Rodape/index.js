import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://github.com/JorgeDeAquino" target="_blank">
                        <AiFillGithub className="icon-sm" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/jorge-alexandre-de-aquino/" target="_blank">
                        <AiFillLinkedin className="icon-sm" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="Logo" />
        </section>
        <section>
            <h4>
                Desenvolvido por:  <a href="https://www.linkedin.com/in/jorge-alexandre-de-aquino/" target="_blank"> Jorge Alexandre</a>.
            </h4>
        </section>
    </footer>)
}

export default Rodape