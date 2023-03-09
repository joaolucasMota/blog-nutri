import {Container, Title, InfoAndImg, Img, Info, SVG} from '../styles/pages/ReeducacaoAlimentar.styles'
import { Footer } from "../components/Web/footer/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function ReeducacaoAlimentar(){

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
            <Container id="section9">
                <Title>
                    <label>Nossa metodologia com base científica para</label>
                    <h1>Reeducação alimentar</h1>
                </Title>
                <InfoAndImg>
                    <Info>
                        <label>Reeducando a forma de se alimentar</label>
                        <h1>Reeducação alimentar</h1>
                        <br />
                        <p>Aprender a comer de forma saudável se torna muito mais simples com conhecimento e planejamento, com isso, o papel da nutricionista é te ajudar a desenvolver autonomia e poder de escolha sob a sua alimentação.</p>
                        <Link target="_blank" to= "https://wa.me/5511913629808?text=Ol%C3%A1!%20Tenho%20interesse%20na%20consulta">
                            <button>Agendar uma consulta</button>
                        </Link>

                    </Info>
                    <Img>
                        <div><img src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="nutrição esportiva" /></div>
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
    )
}