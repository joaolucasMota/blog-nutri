import {AboutContainer, Informations, ProfileImage} from "./styles";

export function About(){
    return(
        <AboutContainer>
            <Informations>
                <label>Oi! Eu sou a</label>
                <br />
                <h1>Nutricionista</h1>
                <br />
                <h2>Emily Cadetex</h2>
                <br /><hr /><br />
                <p><strong>Nutricionista por paixão e amor a profissão</strong>.  A palavra equilíbrio <br /> sempre me acompanha e levo em conta as individualidades da<br /> paciente, acolhendo-a de forma singular, notando suas nuances, estilo<br/> de vida, desejos e dúvidas.</p>

            </Informations>

            
            <ProfileImage>
                <img src="https://i.imgur.com/EVk3XHq.png" alt="Imagem de perfil do sobre" />
            </ProfileImage>
        </AboutContainer>
    )
}