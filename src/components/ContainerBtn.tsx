import { Container, Btn, Quantidade } from "@/styles/ContainerBtnStyles"

interface BtnClick {
    remover: () => void,
    adicionar: () => void,
    quantidade: number
}

export const ContainerBtn = ({remover, quantidade, adicionar}:BtnClick) => {
    return (
        <Container>
            <p style={{alignSelf: 'self-start', fontSize: '8px', marginBottom:'5px'}}>
                Qtd:
            </p>
            <div className="containerBtnAdicionar">
                <Btn onClick={remover}>-</Btn>
                <Quantidade>{quantidade}</Quantidade>
                <Btn onClick={adicionar}>+</Btn>
            </div>
        </Container>
    )
}