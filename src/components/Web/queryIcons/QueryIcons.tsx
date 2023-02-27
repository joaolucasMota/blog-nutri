import { QueryIconsContainer, Email, WhatsApp, Icons } from "./styled"
import {AiOutlineWhatsApp} from "react-icons/ai"
import {TfiEmail} from "react-icons/tfi"

export function QueryIcons(){
    return(
        <QueryIconsContainer>
            <h1>Agende sua consulta</h1>
            <Icons>
                <Email>
                    <TfiEmail size={60}/>
                    <h3>Envie um e-mail</h3>
                    <label>email@email.com</label>
                </Email>
                <WhatsApp>
                    <AiOutlineWhatsApp size={60}/>
                    <h3>Mande uma mensagem</h3>
                    <label>(11) 99348-2318</label>
                </WhatsApp>
            </Icons>
        </QueryIconsContainer>
    )
}