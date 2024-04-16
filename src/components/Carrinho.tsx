import { DivCarrinho, DivTitulo } from "@/styles/Carrinho"
import { MouseEventHandler, useEffect, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { CardCarrinho } from "./CardCarrinho";

interface CarrinhoComponent {
    largura: string,
    espaco: string,
    funcao: MouseEventHandler
}



export const Carrinho = ({ largura, espaco, funcao }: CarrinhoComponent) => {

    const api: string = 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=ASC'
    const [produtos, setProdutos] = useState<string[]>([])

    const [quantidade, setQuandtidade] = useState(0)
    const [valor, setValor] = useState<number>()

    useEffect(() => {
        async function buscarDados() {
          const dados = await fetch(api)
          const resposta = await dados.json()
          setProdutos(resposta.products)
        }
        buscarDados()
      }, [produtos])

    return (
        <DivCarrinho style={{ width: largura, padding: `0 ${espaco}` }}>
            <DivTitulo>
                <p>Carrinho de compras</p>
                <IoIosCloseCircle size={40} onClick={funcao}
                    style={{ position: 'absolute', right: '1rem', cursor: 'pointer' }}
                />
            </DivTitulo>

            {
                produtos.map((card:any) => (
                    <CardCarrinho 
                      key={card.id}  imagem={card.photo} titulo={card.name} preco={valor}
                      quantidade={quantidade}
                      adicionar={() => {
                        setQuandtidade(quantidade+1)
                        setValor(parseFloat(card.price) + parseFloat(card.price))
                      }}
                    />
                ))
            }

           

        </DivCarrinho>
    )
}