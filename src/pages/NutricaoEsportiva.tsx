import { isMobile } from "react-device-detect";
import {Container, Title, InfoAndImg, Img, Info, SVG} from '../styles/pages/NuticaoEsportiva.styles'
import { Footer } from "../components/Web/footer/Footer";
import { Link } from "react-router-dom";

export default function NutricaoEsportiva(){
    return(
        <>
        {isMobile ? (null) :(
            <Container>
                <Title>
                    <label>Nossa metodologia com base científica para</label>
                    <h1>Nutrição esportiva</h1>
                </Title>
                <InfoAndImg>
                    <Info>
                        <label>Equilíbrio energético e potencialização de performance</label>
                        <h1>O que é a Nutrição Esportiva?</h1>
                        <br />
                        <p>Aplicação dos conhecimentos em nutrição, bioquímica e fisiologia na área do esporte, a fim de manter o equilíbrio das necessidades energéticas, através da indicação de nutrientes necessários a cada organismo, conforme a modalidade.</p>
                        <Link target="_blank" to= "https://wa.me/5511913629808?text=Ol%C3%A1!%20Tenho%20interesse%20na%20consulta">
                            <button>Agendar uma consulta</button>
                        </Link>

                    </Info>
                    <Img>
                        <div><img src="https://images.pexels.com/photos/4397841/pexels-photo-4397841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="nutrição esportiva" /></div>
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