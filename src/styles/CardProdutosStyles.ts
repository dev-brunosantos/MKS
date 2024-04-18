import { styled } from 'styled-components';

export const Card = styled.div`
    /* height: 285px; */
    width: 218px;
    height: 300px;
    border-radius: 10px;
    margin: 15px 7px;
    padding: 20px 10px 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    /* box-shadow: -1px 1px 10px #00000050; */
    box-shadow: var(--sombra);
    position: relative;
    overflow: hidden;
    background-color: #FFFFFF;
    @media screen and (max-width: 900px) {
        width: 251px;
        height: 328px;
        margin-bottom: 1rem;
    }
`;

export const ContainerImage = styled.div`
    width: 70%;
    /* width: 111px; */
    /* border: 1px solid; */
    height: 138px;
    display: flex;
    align-items:  center;
    justify-content: center;
    img {
        width: 90%;
        cursor: pointer;
    }
`;

export const ContainerInfor = styled.div`
    width: 100%;
    height: 40px;
    margin: -15px 0 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-color: red; */
    p {
        width: 115px;
        color: #2C2C2C;
        font-size: 15px;
        font-weight: 400;
    }
    div {
        width: 70px;
        height: 30px;
        border-radius: 5px;
        color: #FFFFFF;
        font-size: 15px;
        font-weight: 700;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #373737;
    }
    span {
        font-size: 12px;
    }
    @media screen and(max-width: 900px) {
        margin: 40px 0;
    }
`;

export const Descricao = styled.div`
    width: 100%;
    height: 25px;
    margin: -20px 0 0 0;
    /* background-color: red; */
    p {
        width: 192px;
        color: #2C2C2C;
        font-size: 10px;
        font-weight: 300;
    }
`;

export const BtnComprar = styled.button`
    width: 218px;
    height: 32px;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    /* position: absolute; */
    /* bottom: 0; */
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    background-color: var(--azul);
    div {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        /* background-color: red; */
    }
    @media screen and (max-width: 900px) {
        width: 120%;
    }
`;