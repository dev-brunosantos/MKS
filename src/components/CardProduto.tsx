"use client"
import { MouseEventHandler } from 'react';
import Image from 'next/image'
import { BtnComprar, Card, ContainerImage, ContainerInfor, Descricao } from '../styles/CardProdutosStyles'
import { FiShoppingBag } from "react-icons/fi";

interface CardComponent {
    imagem:string ,
    titulo: string,
    preco: number,
    descricao?: string,
    funcao: MouseEventHandler<HTMLImageElement>
}

export const CardProdutos = ({ imagem, titulo, preco, descricao, funcao }: CardComponent) => {
    return (
        <Card>
            <ContainerImage>
                <Image src={imagem} alt='' width={110} height={138} onClick={funcao} />
            </ContainerImage>
            <ContainerInfor>
                <p> {titulo} </p>
                <div> R$ <span>{preco}</span></div>
            </ContainerInfor>
            <Descricao>
                <p>{descricao}</p>
            </Descricao>
            <BtnComprar>
                <div>
                    <FiShoppingBag size={20} />
                    <p>COMPRAR</p>
                </div>
            </BtnComprar>
        </Card>
    )
}