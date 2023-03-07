import { OnlineServiceContainer, Text, Title } from "./styles"

export function MobileOnlineService(){
    return(
        <OnlineServiceContainer>
            <Title>
                Atendimento <br/> 
                Online
            </Title>
            <Text>
                O atendimento é igual na consulta presencial, com uma conversa bem extensa para entender todo objetivo, preferências, aversões, alergias e rotina de cada paciente. Também tem análises de exames laboratoriais (de sangue). De acordo com essa conversa, a Dra Emily monta um plano alimentar individualizado e personalizado exclusivo para você, além de suplementação quando necessário.

                <br /><br />

                A única diferença é que na consulta online não temos como fazer a avaliação através da Bioimpedância (uma máquina para verificar toda a composição corporal do paciente), mas é orientado como fazer algumas medidas de circunferências para monitoramento do quadro evolutivo.
            </Text>
        </OnlineServiceContainer>
    )
}