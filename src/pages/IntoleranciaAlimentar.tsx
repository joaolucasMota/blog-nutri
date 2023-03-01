import { isMobile } from "react-device-detect";
import {Container, Title, InfoAndImg, Img, Info, SVG} from '../styles/pages/IntoleranciaAlimentar.styles'
import { Footer } from "../components/Web/footer/Footer";
import { Link } from "react-router-dom";

export default function IntoleranciaAlimentar(){
    return(
        <>
        {isMobile ? (null) :(
            <Container>
                <Title>
                    <label>Nossa metodologia com base científica para</label>
                    <h1>Intolerância ou alergia alimentar</h1>
                </Title>
                <InfoAndImg>
                    <Info>
                        <label>Permitindo-se uma vida melhor</label>
                        <h1>Intolerância ou alergia alimentar</h1>
                        <br />
                        <p>Quem possui algum tipo de intolerância ou alergia precisa estar atento no que consumir, você pode ter qualidade de vida e ainda sair pra comer fora se você souber o que comer. Por isso é fundamental ter um profissional capacitado que saberá como te instruir.</p>
                        <Link target="_blank" to= "https://wa.me/5511913629808?text=Ol%C3%A1!%20Tenho%20interesse%20na%20consulta">
                            <button>Agendar uma consulta</button>
                        </Link>

                    </Info>
                    <Img>
                        <div><img src="https://magscan.com.br/wp-content/uploads/2020/07/intolerancia-e-alergias-alimentares-como-identificar-capa.png" alt="nutrição esportiva" /></div>
                    </Img>
                </InfoAndImg>
                <SVG>
                    <svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,250 C250,150 750,400 1000,250 L1000,500 L0,500 Z" fill="#bbe3cd" opacity="0.5"/>
                        <path d="M0,270 C250,170 750,390 1000,270 L1000,500 L0,500 Z" fill="#bbe3cd"/>
                    </svg>
                 </SVG>
                 <Footer/>
            </Container>
            
        )}
        </>
    )
}