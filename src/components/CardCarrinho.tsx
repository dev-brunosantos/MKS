import Image from 'next/image'
import { CarrinhoCard, CarrinhoCardImg, CarrinhoCardPreco, CarrinhoCardTitulo } from "@/styles/CardCarrinhoStyles"
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { ContainerBtn } from './ContainerBtn'
import { useState } from 'react'

interface CardCarrinhoComponent {
    imagem:string ,
    titulo: string,
    preco: number,
    // idProduto?: number
}


export const CardCarrinho = ({imagem, titulo, preco }:CardCarrinhoComponent) => {
    let dados: string[] = JSON.parse(localStorage.getItem('produto')) || [];

    const [quantidadeItem, setQuantidadeItem] = useState(1)
    const [valor, setValor] = useState<number>()

    const adicionarProduto = () => {
        setQuantidadeItem(quantidadeItem+1)
    }
    // const removerProduto = (idProd) => {
    const removerProduto = () => {
        setQuantidadeItem(quantidadeItem-1)
        if(quantidadeItem <= 1) {
            // alert('Removido')
            let texto = JSON.parse(localStorage.produto)
            // alert(JSON.stringify(texto[0].id))
            dados.splice(texto[0].id, 1)
            localStorage.setItem('produto', JSON.stringify(dados))
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
                // remover={removerProduto} 
                // adicionar={adicionarProduto} 
                remover={removerProduto} 
                adicionar={adicionarProduto} 
                quantidade={quantidadeItem} 
            />
            <CarrinhoCardPreco>R$ {preco}</CarrinhoCardPreco>
        </CarrinhoCard>
    )
}