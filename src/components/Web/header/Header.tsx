import {Navbar, NavbarLinks, Icon, Services, Method, Logo, About, Contact, Button} from "./styles"
import {FaInstagram, FaWhatsapp} from "react-icons/fa"
import {AiOutlineMail} from "react-icons/ai"
import LogoNav from "../../../assets/logoj.png"
import {IoIosArrowDown} from "react-icons/io"
import {Link} from "react-router-dom"

export function Header(){
    return(
        <Navbar>
            <Icon>
                <a href="mailto: emilycadetes@gmail.com">
                    <AiOutlineMail size={22}/>
                </a>
                <Link target="_blank" to="https://www.instagram.com/mily.cs/">
                    <FaInstagram size={22}/>
                </Link>
                <Link target="_blank" to= "https://wa.me/5511913629808?text=Ol%C3%A1!%20Tenho%20interesse%20na%20consulta">
                    <FaWhatsapp size={22}/>
                </Link>
            </Icon>

            <NavbarLinks>
                <Services>
                    <a href="#">Serviços <IoIosArrowDown/></a>
                    <ul>
                        <li><Link to="/emagrecimento-obesidade">Emagrecimento & obesidade</Link></li>
                        <li><Link to="/transtorno-alimentar">Transtorno alimentar</Link></li>
                        <li><Link to="/nutricao-esportiva">Nutrição esportiva</Link></li>
                        <li><Link to="/reeducacao-alimentar">Reeducação alimentar</Link></li>
                        <li><Link to="/intolerancia-alimentar">Intolerância ou Alergia alimentar</Link></li>
                    </ul>
                </Services>
                <label>•</label>
                <Method>
                    <a href="#">Metodo</a>
                </Method>
           
            
            <Logo>
                <Link to="/"><img src={LogoNav} alt="Logo" /></Link>
            </Logo>

            
                <About>
                    <a href="#">Sobre</a>
                </About>
                <label>•</label>
                <Contact>
                    <a href="#">Contato</a>
                </Contact>
            </NavbarLinks>
            
            <Link target="_blank" to= "https://wa.me/5511913629808?text=Ol%C3%A1!%20Tenho%20interesse%20na%20consulta">
                <Button>
                    Agende sua consulta
                </Button>
            </Link>
        </Navbar>
    )
}