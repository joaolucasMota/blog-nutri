import {HomeContainer, Button, Informations, ProfileImage, SVG, ContainerInfoAndPhoto} from './styles'
import { Link } from 'react-router-dom'

export function Home(){
    return(
        <>
        <HomeContainer id="section9">
            <ContainerInfoAndPhoto>
                <Informations>
                    <label>CRN-3: 77797/P</label>
                    <p>Nutricionista</p>
                    <h2>Emily Cadete</h2>
                    <h4>Emgrecimento, Performance,<br/> Bem-estar e Qualidade de Vida</h4>
                    <Link target="_blank" to= "https://wa.me/5511913629808?text=Ol%C3%A1!%20Tenho%20interesse%20na%20consulta">
                        <Button>
                            Agende sua consulta
                        </Button>
                    </Link>
                </Informations>
                <ProfileImage>
                    <img src="https://i.imgur.com/2Iy08nD.jpg" alt="Imagem de perfil" />
                </ProfileImage>
            </ContainerInfoAndPhoto>

            <SVG>
                <svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,250 C250,150 750,400 1000,250 L1000,500 L0,500 Z" fill="#bbe3cd" opacity="0.6"/>
                    <path d="M0,270 C250,170 750,390 1000,270 L1000,500 L0,500 Z" fill="#ffffff"/>
                </svg>
            </SVG>
        </HomeContainer>
        
        </>
    )
}