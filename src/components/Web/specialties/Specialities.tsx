import { SpecialitiesContainer, TwoCards, OneCard, Card, CardFull } from "./styles"
import { Link } from "react-router-dom"

export function Specialities(){
    return(
        <SpecialitiesContainer>
            <h1>Minhas Especialidades</h1>
            <TwoCards>
                <Link to='/'>
                    <Card>
                        <div className="cardImage" id="card1"/>
                        <h2>Emagrecimento e Obesidade</h2>
                        <p>Quando se trata de obesidade sabemos que a luta é bem maior do que a balança e a estética. Trata-se de qualidade de vida, a nutrição é fundamental para recuperar isso.</p>
                    </Card>
                </Link>
                <Link to='/'>
                    <Card>
                        <div className="cardImage" id="card2"/>
                        <h2>Transtorno alimentar</h2>
                        <p>Ter medo de comida é algo que tem influência direta no âmbito familiar, emocional, social e psicológico. O tratamento do transtorno alimentar é multiprofissional e consiste em te ajudar a fazer as pazes com sua alimentação.</p>
                    </Card>
                </Link>
            </TwoCards>
            <TwoCards>
                <Link to='/'>
                    <Card>
                        <div className="cardImage" id="card3"/>
                        <h2>Nutrição esportiva </h2>
                        <p>A nutrição esportiva consiste na dos conhecimentos em nutrição, bioquímica e fisiologia na área do esporte, podendo ser sobre estética corporal ou sobre desenvolvimento profissional (no caso de atletas).</p>
                    </Card>
                </Link>
                <Link to='/'>
                    <Card>
                        <div className="cardImage" id="card4"/>
                        <h2>Reeducação alimentar </h2>
                        <p>Aprender a comer de forma saudável se torna muito mais simples com conhecimento e planejamento, com isso, o papel da nutricionista é te ajudar a desenvolver autonomia e poder de escolha sob a sua alimentação.</p>
                    </Card>
                </Link>
            </TwoCards>
            <OneCard>
                <Link to='/'>
                    <CardFull>
                        <div/>
                        <h2>Intolerância ou Alergia alimentar </h2>
                        <p>Quem possui algum tipo de intolerância ou alergia precisa estar atento no que consumir, você pode ter qualidade de vida e ainda sair pra comer fora se você souber o que comer. Por isso é fundamental ter um profissional capacitado que saberá como te instruir.</p>
                    </CardFull>
                </Link>
            </OneCard>
        </SpecialitiesContainer>
    )
}