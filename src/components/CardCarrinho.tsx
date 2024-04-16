import Image from 'next/image'
import { CarrinhoCard, CarrinhoCardImg, CarrinhoCardPreco, CarrinhoCardTitulo } from "@/styles/CardCarrinhoStyles"
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { ContainerBtn } from './ContainerBtn'
import { useState } from 'react'

interface CardCarrinhoComponent {
    imagem:string ,
    titulo: string,
    preco: number,
    quantidade: number,
    btnAdicionar: () => void,
    btnRemover: () => void
}

export const CardCarrinho = ({imagem, titulo, preco, btnAdicionar, btnRemover}:CardCarrinhoComponent) => {

    const [quantidade, setQuantidade] = useState(1)
    // const [valor, setValor] = useState<number>()

    const adicionarProduto = (num:any) => {
        setQuantidade(quantidade+1)
    }
    const removerProduto = () => {
        setQuantidade(quantidade-1)
        if(quantidade === 0) {
            setQuantidade(0)
        }
    }

    return(
        <CarrinhoCard>
            <CarrinhoCardImg>
                <Image src={imagem} alt='' width={50} height={60}  />
            </CarrinhoCardImg>
            <CarrinhoCardTitulo>
                {titulo}
            </CarrinhoCardTitulo>
            <ContainerBtn 
                remover={removerProduto} 
                adicionar={adicionarProduto} 
                quantidade={quantidade} 
            />
            <CarrinhoCardPreco>R$ {preco}</CarrinhoCardPreco>
        </CarrinhoCard>
    )
}