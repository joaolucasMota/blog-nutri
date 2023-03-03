import { MethodContainer, Image, Text, Button } from "./styles"
import { Link } from "react-router-dom"

export function Method(){
    return(
        <MethodContainer>
            <Image src="https://lirp.cdn-website.com/4dd4966b/dms3rep/multi/opt/photo-1470167290877-7d5d3446de4c-bba841ec-1920w.jpg" alt="imagem de método">
            </Image>
            <Text>
                <h1>Método</h1>
                <p>O método de atendimento consiste em entregar conhecimento, autonomia e qualidade de vida para o paciente de forma individualizada. Por isso, é importante você saber que em cada consulta nós iremos conversar sobre você, entender sua rotina, dinâmica e padrão de vida para que possamos adequar sua alimentação de maneira leve e simples.  Não é sobre dieta, é sobre estilo de vida.</p>
                <Link target="_blank" to= "https://wa.me/5511913629808?text=Ol%C3%A1!%20Tenho%20interesse%20na%20consulta">
                    <Button>
                        Agende sua consulta
                    </Button>
                </Link>
            </Text>
        </MethodContainer>
    )
}