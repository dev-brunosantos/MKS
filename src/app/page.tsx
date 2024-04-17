"use client"
import { useEffect, useState } from 'react';
import { TiShoppingCart } from "react-icons/ti";
// IMPORTAÇÃO DE COMPONENTES
import { CardProdutos } from '@/components/CardProduto';
import { Carrinho } from '@/components/Carrinho';
import { Modal } from '@/components/Modal';
import { ContainerBtn } from '@/components/ContainerBtn';
// IMPORTAÇÃO DE ESTILOS
import * as Styles from '../styles/Styles'
import SalvarLocalStorage from '@/tools/LocalStorage';




export default function Home() {

  const api: string = 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=ASC'

  const [srcImg, setSrcImg] = useState<string>()
  const [verImg, setVerImg] = useState('none')
  const [abrirCarrinho, setAbrirCarrinho] = useState<string>('0px')
  const [espaco, setEspaco] = useState<string>('0rem')

  const [produtos, setProdutos] = useState<String[]>([])

  let dados: string[] = JSON.parse(localStorage.getItem('produto')) || [];
  const [quantidade, setQuantidade] = useState(0)

  

  useEffect(() => {
    async function buscarDados() {
      const dados = await fetch(api)
      const resposta = await dados.json()
      setProdutos(resposta.products)
    }
    buscarDados()
  }, [produtos])

  useEffect(() => {
      function QuantidadeCarrinho() {
        dados.length != 0 ? setQuantidade(dados.length) : setQuantidade(0)
      }
      QuantidadeCarrinho()
  }, [])

  const ApliaImg = (img: string) => {
    setSrcImg(img)
    setVerImg('flex')
  }
  const FechaImg = () => {
    setSrcImg('')
    setVerImg('none')
  }

  const BtnAbrirCarrinho = () => {
    if (abrirCarrinho === '0px') {
      return (
        setAbrirCarrinho('486px'),
        setEspaco('2.5rem')
      )
    }
  }
  const BtnFecharCarrinho = () => {
    if (abrirCarrinho !== '0px') {
      return (
        setAbrirCarrinho('0px'),
        setEspaco('0')
      )
    }
  }

  return (
    <Styles.Tela >
      {/* MENU PRINCIPAL */}
      <Styles.Menu>
        <h1> MKS <span> Sistemas</span></h1>

        <button type='button' onClick={BtnAbrirCarrinho} >
          <TiShoppingCart size={20} />
          {quantidade}
        </button>
      </Styles.Menu>
      {/* CONTAINER COM TODOS OS PRODUTOS */}
      <Styles.Container>
        {
          produtos.map((card: any) => (
            <CardProdutos key={card.id}
              imagem={card.photo}
              titulo={card.name}
              preco={card.price}
              descricao={card.description}
              funcao={() => ApliaImg(card.photo)}
              btnComprar={() => {
                SalvarLocalStorage(card.id, card.photo, card.name, card.price)
              }}
            />
          ))
        }
      </Styles.Container>
      {/* AO CLICAR NA IMAGEM DO PRODUTO, ABRIRÁ O MODAL COM A IMAGEM MAIOR */}
      <Modal img={srcImg} display={verImg} funcao={FechaImg} />

      <Carrinho largura={abrirCarrinho} espaco={espaco} funcao={BtnFecharCarrinho} />
    </Styles.Tela>
  );
}
