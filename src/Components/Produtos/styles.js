import styled from "styled-components";

export const ListaProdutos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 20vh;
    border: 2px solid gray;
    border-radius: 10px;
    padding: 6% 0;
`; 

export const Produto = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3vh;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content:space-around;
    padding-top: 2vh ;
    padding-bottom: 2vh ;
    background-color: antiquewhite;
`; 

export const DivProdutos = styled.div`
    display:flex;
    flex-direction:column;
    gap: 6vw;
    padding: 6vh;
`; 
