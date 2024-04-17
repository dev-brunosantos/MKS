import { ContainerProdutosScrool, DivCarrinho, DivTitulo, FooterCarrinho, InforTotal } from "@/styles/Carrinho"
import { MouseEventHandler, useEffect, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { CardCarrinho } from "./CardCarrinho";

interface CarrinhoComponent {
    largura: string,
    espaco: string,
    funcao: MouseEventHandler
}

// import SomarPrecos2 from '@/tools/SomarPreco'

export const Carrinho = ({ largura, espaco, funcao }: CarrinhoComponent) => {

    let dados: string[] = JSON.parse(localStorage.getItem('produto')) || [];
    const [total, setTotal] = useState<number>()
    const [quantidade, setQuantidade] = useState(3)

    useEffect(() => {
        function SomarPrecos2() {
            let soma = 0;
            dados.map((produto:any) => {
                let valor:number = soma += parseFloat(produto.preco)
                setTotal(valor);
            });
        }
        SomarPrecos2()
    })
    // alert(dados.length)

    

    return (
        <DivCarrinho style={{ width: largura, padding: `0 ${espaco}` }} onMouseLeave={funcao}>
            <DivTitulo>
                <p>Carrinho de compras</p>
                <IoIosCloseCircle size={40} onClick={funcao}
                    style={{ position: 'absolute', right: '1rem', cursor: 'pointer' }}
                />
            </DivTitulo>

            <ContainerProdutosScrool>
                {
                    dados.map((produto:any) => (
                        <CardCarrinho
                            key={produto.id}
                            imagem={produto.img}
                            titulo={produto.nome}
                            preco={produto.preco}
                            // idProduto={produto.id}
                        />
                    ))
                }
            </ContainerProdutosScrool>

            <InforTotal>
                <p>Total:</p>
                <p>
                    R$ 
                    <span> {total} </span>
                </p>
            </InforTotal>
            <FooterCarrinho>
                <p>Finalizar Compra</p>
            </FooterCarrinho>

        </DivCarrinho>
    )
}