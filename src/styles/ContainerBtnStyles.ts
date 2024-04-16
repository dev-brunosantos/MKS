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
`;

export const Quantidade = styled.p`
    width: 50px;
    color: var(--preto);
    font-size: 12px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
`;