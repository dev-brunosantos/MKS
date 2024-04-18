import { styled } from 'styled-components';

export const DivCarrinho = styled.div`
    /* min-width: 400px; */
    /* width: 486px; */
    /* width: -10; */
    height: 1024px;
    /* padding: 0 2.5rem; */
    position: absolute;
    top: 0%;
    right: 0;
    overflow: hidden;
    transition: 0.4s;
    background-color: var(--azul);
    @media screen and (max-width: 900px) {
        max-width: 90%;
        height: 100vh;
        position: fixed;
        z-index: 999;
    }
`;

export const DivTitulo = styled.div`
    width: 100%;
    height: 101px;
    /* padding: 0 4rem; */
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3rem;
    p {
        width: 180px;
        height: 56px;
        color: var(--branco);
        font-size: 27px;
        font-weight: 700;
    }
    @media screen and (max-width: 900px) {
        margin-bottom: 1rem;
        
    }
`;

export const ContainerProdutosScrool = styled.div`
    width: 100%;
    height: 66%;
    margin-bottom: 2%;
    padding: 20px 0 100px 0;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    /* background-color: var(--preto); */
    @media screen and (max-width: 900px) {
        width: 110%;
        height: 65%;
        margin-left: -5%;
        margin-bottom: 0;
        padding: 20px 10px;
    }

`;

export const InforTotal = styled.div`
    width: 486px;
    height: 97px;
    /* height: 200px; */
    position: absolute;
    left: 0;
    /* bottom: 0; */
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* background-color: var(--branco); */
    p {
        /* width: 45%; */
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        /* height: 15px; */
        color: var(--branco);
        font-size: 28px;
        font-weight: 700;
    }
    span {
        margin-left: 5px;
    }
    @media screen and (max-width: 900px) {
        width: 100%;
        height: 65.86px;
        p {
            font-size: 20px;
        }
    }
`;

export const FooterCarrinho = styled.button`
    width: 486px;
    height: 97px;
    position: absolute;
    left: 0;
    bottom: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--preto);
    p {
        width: 249px;
        height: 15px;
        color: var(--branco);
        font-size: 28px;
        font-weight: 700;
    }
    @media screen and (max-width: 900px) {
        width: 100%;
        height: 65.86px;
        p {
            font-size: 20px;
        }
    }
`;