import {styled} from 'styled-components';

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
`;

export const ContainerProdutosScrool = styled.div`
    width: 100%;
    height: 80%;
    padding: 20px 0 100px 0;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    /* background-color: var(--preto); */
`;
