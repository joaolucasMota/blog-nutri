import {FooterContainer, Contact, Button, Icon, EmailContainer, EmailLink, CopyButton, Top} from './styles'
import {BiConversation} from 'react-icons/bi'
import {AiOutlineMail} from 'react-icons/ai'
import {FaInstagram, FaWhatsapp} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaCheck, FaCopy } from 'react-icons/fa'
import { useState } from 'react'
import {HiOutlineArrowUp} from 'react-icons/hi'

export function MobileFooter(){
    const [copiado, setCopiado] = useState(false)

    const copyEmail = () => {
        navigator.clipboard.writeText('emilycadetes@gmail.com').then(
           async function() {
                setCopiado(true);
                await new Promise(resolve => setTimeout(resolve, 2000));
                setCopiado(false)
            }
        );

    };

    return(
        <>
        <FooterContainer>
            <Contact>
                <h5>Contato</h5>
                <p>(11) 91362‑9808</p>
                <EmailContainer>
                    <EmailLink>emilycadetes@gmail.com</EmailLink>
                    <CopyButton onClick={copyEmail}>{copiado ? <FaCheck/> : <FaCopy/>} </CopyButton>
                </EmailContainer>
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
        <Top>
            <a href="#section9">Voltar ao topo<HiOutlineArrowUp size={20}/></a>
        </Top>
        </>
    )
}