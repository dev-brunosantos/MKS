import { styled } from 'styled-components'

export const CarrinhoCard = styled.div`
    width: 385px;
    height: 101px;
    margin-bottom: 2em;
    padding: 20px; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    box-shadow: var(--sombra);
    background-color: var(--branco);
    position: relative;
    @media screen and (max-width: 900px) {
        width: 100%;
        height: 220.05px;
        padding: 20px 5%; 
        display: grid;
        grid-template-areas: 
            "imagem imagem imagem imagem"
            "titulo titulo titulo titulo"
            "quantidade quantidade preco preco"
        ;
    }
    `;

export const CarrinhoCardImg = styled.div`
    max-width: 50px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: var(--branco); */
    @media screen and (max-width: 900px) {
        width: 200px;
        max-width: 100%;
        height: 95.1px;
        grid-area: imagem;
        justify-self: center;
    }
    `;

export const CarrinhoCardTitulo = styled.h2`
    width: 100px;
    height: 33px;
    display: flex;
    align-items: center;
    color: var(--texto);
    font-size: 13px;
    font-weight: 400;
    @media screen and (max-width: 900px) {
        width: 211px;
        height: 21.45px;
        margin: 1rem;
        grid-area: titulo;
        font-size: 16px;
    }
    `;

export const CarrinhoCardPreco = styled.h2`
    color: var(--preto);
    font-size: 14px;
    font-weight: 700;
    @media screen and (max-width: 900px) {
        width: 84px;
        height: 34.81px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        grid-area: preco;
        justify-self: center;
        color: var(--branco);
        font-size: 14px;
        background-color: #373737;
    }
`;