import { isMobile } from "react-device-detect";
import {Container, Title, InfoAndImg, Img, Info, SVG} from '../styles/pages/Contato.styles';
import { Footer } from "../components/Web/footer/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Contato(){

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <>
        {isMobile ? (null) :(
            <Container id="section9">
                <Title>
                    <label></label>
                    <h1>Contato</h1>
                </Title>
                <InfoAndImg>
                    <Info>
                        <label></label>
                        <h1>Contato</h1>
                        <br />
                        <p>Email: emilycadetes@gmail.com <br />
                        WhatsApp: (11) 91362‑9808</p>
                        <Link target="_blank" to= "https://wa.me/5511913629808?text=Ol%C3%A1!%20Tenho%20interesse%20na%20consulta">
                            <button>Agendar uma consulta</button>
                        </Link>

                    </Info>
                    <Img>
                        <div><img src="https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="nutrição esportiva" /></div>
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