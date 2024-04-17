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
    `;

export const CarrinhoCardImg = styled.div`
    max-width: 50px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: var(--branco); */
`;

export const CarrinhoCardTitulo = styled.h2`
    width: 100px;
    height: 33px;
    display: flex;
    align-items: center;
    color: var(--texto);
    font-size: 13px;
    font-weight: 400;
`;

export const CarrinhoCardPreco = styled.h2`
    color: var(--preto);
    font-size: 14px;
    font-weight: 700;
`;