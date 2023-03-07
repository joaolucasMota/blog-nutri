import {Container, Image, Infos, Button} from './styles'
import { Link } from 'react-router-dom'

export function MobileAbout(){
    return(
        <Container>
            <Image>
                <img src="https://i.imgur.com/2Iy08nD.jpg" alt="foto Dra Emily" />
            </Image>
            <Infos>
                <label>Oi! Eu sou a</label>
                <br />
                <h1>Nutricionista</h1>
                <br />
                <h2>Emily Cadete</h2>
                <br /><hr /><br />
                <p><strong>Nutricionista por paixão e amor a profissão</strong>.  A palavra equilíbrio <br /> sempre me acompanha e levo em conta as individualidades da<br /> paciente, acolhendo-a de forma singular, notando suas nuances, estilo<br/> de vida, desejos e dúvidas.</p>
            </Infos>
            <Link target="_blank" to= "https://wa.me/5511913629808?text=Ol%C3%A1!%20Tenho%20interesse%20na%20consulta">
                <Button>
                    Agende sua consulta
                </Button>
            </Link>
        </Container>
    )
}