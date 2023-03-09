import {Container, Title, InfoAndImg, Img, Info, SVG} from '../styles/pages/MobileMetodo.styles'
import { MobileFooter } from '../components/Mobile/mobileFooter/mobileFooter';
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function MobileMetodo(){

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
            <Container id="section9">
                <Title>
                    <label></label>
                    <h1>Método</h1>
                </Title>
                <InfoAndImg>
                    <Info>
                        <label></label>
                        <h1>Metodologia</h1>
                        <br />
                        <p>O método de atendimento consiste em entregar conhecimento, autonomia e qualidade de vida para o paciente de forma individualizada. Por isso, é importante você saber que em cada consulta nós iremos conversar sobre você, entender sua rotina, dinâmica e padrão de vida para que possamos adequar sua alimentação de maneira leve e simples. Não é sobre dieta, é sobre estilo de vida.</p>
                        <Link target="_blank" to= "https://wa.me/5511913629808?text=Ol%C3%A1!%20Tenho%20interesse%20na%20consulta">
                            <button>Agendar uma consulta</button>
                        </Link>

                    </Info>
                </InfoAndImg>
                <Img>
                    <div><img src="https://images.pexels.com/photos/1172019/pexels-photo-1172019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="metodologia" /></div>
                </Img>
                <SVG>
                    <svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,250 C250,150 750,400 1000,250 L1000,500 L0,500 Z" fill="#bbe3cd" opacity="0.5"/>
                        <path d="M0,270 C250,170 750,390 1000,270 L1000,500 L0,500 Z" fill="#bbe3cd"/>
                    </svg>
                 </SVG>
                 <MobileFooter/>
            </Container>
    )
}