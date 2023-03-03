import { isMobile } from "react-device-detect";
import {Container, Title, InfoAndImg, Img, Info, SVG} from '../styles/pages/Sobre.styles';
import { Footer } from "../components/Web/footer/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Sobre(){

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <>
        {isMobile ? (null) :(
            <Container id="section9">
                <Title>
                    <label></label>
                    <h1>Sobre</h1>
                </Title>
                <InfoAndImg>
                    <Info>
                        <label>Sobre a Dra.</label>
                        <h1>Emily Cadete</h1>
                        <br />
                        <p>Me chamo Emily Cadete e minha jornada com a nutrição começou com 13 anos quando eu tentei realizar diversas dietas malucas para emagrecer, aos 15 anos decidi que queria estudar nutrição para saber fazer minha própria dieta e entrei na ETEC onde estudei técnico em nutrição e dietética por 1 ano e 6 meses. Durante o curso descobri o mundo lindo que é a nutrição, como podemos curar a vida com a alimentação e que nutrição é muito mais que contar calorias e fazer dietas, ao finalizar o curso eu tive certeza que essa seria a minha profissão. Aos 17 anos consegui uma bolsa de estudos no meu curso do sonhos, a tão sonhada nutrição, de lá pra cá embarquei nesse mundo complexo e magnífico que é os alimentos e o nosso comportamento diante deles.  Me formei aos 21 anos com sede de aprender mais e adquirir conhecimentos, no momento estou estudando mais sobre a nutrição comportamental porque apesar dos 6 anos nessa caminhada, conhecimento nunca é demais. Para mudar não só sua alimentação mas sua vida, entre em contato comigo!</p>
                        <Link target="_blank" to= "https://wa.me/5511913629808?text=Ol%C3%A1!%20Tenho%20interesse%20na%20consulta">
                            <button>Agendar uma consulta</button>
                        </Link>

                    </Info>
                    <Img>
                        <div><img src="https://i.imgur.com/2Iy08nD.jpg" alt="nutrição esportiva" /></div>
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