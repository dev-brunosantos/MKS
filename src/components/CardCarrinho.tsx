import Image from 'next/image'
import { CarrinhoCard, CarrinhoCardImg, CarrinhoCardPreco, CarrinhoCardTitulo } from "@/styles/CardCarrinhoStyles"
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { ContainerBtn } from './ContainerBtn'
import { useEffect, useState } from 'react'

interface CardCarrinhoComponent {
    imagem:string ,
    titulo: string,
    preco: number,
    // idProduto?: number
}


export const CardCarrinho = ({imagem, titulo, preco }:CardCarrinhoComponent) => {
    const storage:any = localStorage.getItem('produto')
    let dados: string[] = JSON.parse(storage) || [];

    const [larguraImg, setLarguraImg] = useState(50)
    const [alturaImg, setAlturaImg] = useState(60)
    useEffect(() => {
        function verificaTamanhoTela() {
            if(window.innerWidth < 900) {
                setLarguraImg(100)
                setAlturaImg(110)
            }
            else {
                setLarguraImg(50)
                setAlturaImg(60)
            }
        }
        verificaTamanhoTela()
    })

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
            setQuantidadeItem(0)
            let texto = JSON.parse(localStorage.produto)
            // alert(JSON.stringify(texto[0].id))
            dados.splice(texto[0].id, 2)
            localStorage.setItem('produto', JSON.stringify(dados))
        }
    }

    return(
        <CarrinhoCard>
            <CarrinhoCardImg>
                <Image src={imagem} alt='' width={larguraImg} height={alturaImg} className='img-card-carrinho' onClick={() => {
                    alert(window.innerWidth)
                }} />
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