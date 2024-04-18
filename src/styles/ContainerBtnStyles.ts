import { styled } from 'styled-components';

export const Container = styled.div`
    width: 50px;
    /* border: 1px solid; */
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items:  center;
    justify-content: start;
    div {
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    @media screen and (max-width: 900px) {
        width: 97.37px;
        /* height: 34.5px; */
        height: 40px;
        justify-content: center;
        grid-area: quantidade;
        
        justify-self: center;
        border: 1px solid var(--cinza);
        border-radius: 5px;
        >p {
            display: none;
        }
    }
    `;

export const Btn = styled.button`
    width: 50px;
    height: 12px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--preto);
    font-size: 12px;
    font-weight: 400;
    cursor: pointer;
    background-color: var(--branco);
    @media screen and (max-width: 900px) {
        width: 80px;
        height: 20px;
        grid-area: imagem;
        font-size: 22px;
        
    }
`;

export const Quantidade = styled.p`
    width: 50px;
    color: var(--preto);
    font-size: 12px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 900px) {
        width: 80px;
        height: 20px;
        font-size: 22px;
        
    }
`;