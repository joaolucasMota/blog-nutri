import {FooterContainer, Contact, Button, Icon} from './styles'
import {BiConversation} from 'react-icons/bi'
import {AiOutlineMail} from 'react-icons/ai'
import {FaInstagram, FaWhatsapp} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export function Footer(){
    return(
        <FooterContainer>
            <Contact>
                <h5>Contato</h5>
                <p>(11) 91362‑9808</p>
                <p>emilycadetes@gmail.com</p>
            </Contact>
            <Button>
                <Link target="_blank" to= "https://wa.me/5511913629808?text=Ol%C3%A1!%20Tenho%20interesse%20na%20consulta">
                    <button><BiConversation size={20}/> Envie um WhatsApp</button>
                </Link>
                <Icon>
                    <a href="mailto:emilycadetes@gmail.com">
                        <AiOutlineMail size={30}/>
                    </a>
                    <Link target="_blank" to="https://www.instagram.com/mily.cs/">
                        <FaInstagram size={30}/>
                    </Link>
                </Icon>
            </Button>
        </FooterContainer>
    )
}