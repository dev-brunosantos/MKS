import { ContainerProdutosScrool, DivCarrinho, DivTitulo } from "@/styles/Carrinho"
import { MouseEventHandler, useEffect, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { CardCarrinho } from "./CardCarrinho";

interface CarrinhoComponent {
    largura: string,
    espaco: string,
    funcao: MouseEventHandler
}



export const Carrinho = ({ largura, espaco, funcao }: CarrinhoComponent) => {

    let dados: string[] = JSON.parse(localStorage.getItem('produto'));

    dados.forEach(dado => console.log(dado))

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
                    dados.map(produto => (
                        <CardCarrinho
                            key={produto.id}
                            imagem={produto.img}
                            titulo={produto.nome}
                            preco={produto.preco}
                            btnAdicionar={() => alert('Adicionar')}
                            btnRemover={() => alert('Remover')}
                            quantidade={0}
                        />
                    ))
                }
            </ContainerProdutosScrool>

        </DivCarrinho>
    )
}