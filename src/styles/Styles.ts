import { styled } from 'styled-components';

export const Tela = styled.div`
    max-width: 1440px;
    min-height: 100dvh;
    max-height: 1024px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    `;

export const Menu = styled.header`
    width: 100%;
    max-width: 1440px;
    height: 101px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4rem;
    background-color: #0F52BA;
    h1 {
        color: #fff;
        font-size: 40px;
        font-weight: 600;
    }
    span {
        font-size: 20px;
        font-weight: 300;
    }
    button {
        width: 90px;
        height: 45px;
        border: none;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        font-size: 18px;
        font-weight: 700;
        cursor: pointer;
        background-color: #FFFFFF;
    }
`;


export const Container = styled.div`
    width: 938px;
    min-height: 600px;
    padding: 7rem 0px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;