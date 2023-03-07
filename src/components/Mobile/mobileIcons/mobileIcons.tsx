import {AiOutlineWhatsApp} from "react-icons/ai"
import {TfiEmail} from "react-icons/tfi"
import { Link } from "react-router-dom"
import { QueryIconsContainer,
    Email,
    WhatsApp,
    Icons,
    SVG } from "./styles"

export function MobileIcons(){
    return(
        <QueryIconsContainer>
            <h1>Agende sua consulta</h1>
            <Icons>
                <Email>
                    <TfiEmail size={60}/>
                    <h3>Envie um e-mail</h3>
                    <label>emilycadetes@gmail.com</label>
                </Email>
                <Link target="_blank" to= "https://wa.me/5511913629808?text=Ol%C3%A1!%20Tenho%20interesse%20na%20consulta">
                    <WhatsApp>
                        <AiOutlineWhatsApp size={60}/>
                        <h3>Mande uma mensagem</h3>
                        <label>(11) 91362‑9808</label>
                    </WhatsApp>
                </Link>
            </Icons>
            <SVG>
                <svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,250 C250,150 750,400 1000,250 L1000,500 L0,500 Z" fill="#bbe3cd" opacity="0.5"/>
                    <path d="M0,270 C250,170 750,390 1000,270 L1000,500 L0,500 Z" fill="#bbe3cd"/>
                </svg>
            </SVG>
        </QueryIconsContainer>
    )
}