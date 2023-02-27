import {Navbar, NavbarLinks, Icon, Services, Method, Logo, About, Contact, Button} from "./styles"
import {FaInstagram, FaWhatsapp} from "react-icons/fa"
import {AiOutlineMail} from "react-icons/ai"
import LogoNav from "../../../assets/logoj.png"
import {IoIosArrowDown} from "react-icons/io"

export function Header(){
    return(
        <Navbar>
            <Icon>
                <AiOutlineMail size={22}/>
                <FaInstagram size={22}/>
                <FaWhatsapp size={22}/>
            </Icon>

            <NavbarLinks>
                <Services>
                    <a href="#">Serviços <IoIosArrowDown/></a>
                    <ul>
                        <li><a href="#">Emagrecimento & obesidade</a></li>
                        <li><a href="#">Transtorno alimentar</a></li>
                        <li><a href="#">Nutrição esportiva</a></li>
                        <li><a href="#">Reeducação alimentar</a></li>
                        <li><a href="#">Intolerância ou Alergia alimentar</a></li>
                    </ul>
                </Services>
                <label>•</label>
                <Method>
                    <a href="#">Metodo</a>
                </Method>
           
            
            <Logo>
                <img src={LogoNav} alt="Logo" />
            </Logo>

            
                <About>
                    <a href="#">Sobre</a>
                </About>
                <label>•</label>
                <Contact>
                    <a href="#">Contato</a>
                </Contact>
            </NavbarLinks>
            
            <Button>
                Agende sua consulta 
            </Button>
        </Navbar>
    )
}