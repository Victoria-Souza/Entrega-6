import styled from "styled-components";
import img from "../../Assets/produto_img2.jpg"

export const ListaProdutos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 38vh;
    border: 2px solid gray;
    border-radius: 10px;
    padding: 3vh;
    background-color: #fcf6ef;
    box-shadow: 0 0 10px gray;
`; 

export const Wrapper = styled.div`
    width:100%;
    display: flex;
    flex-direction:column;
    justify-content:center;
    background-color: antiquewhite;
    padding: 0 3vw;
`; 

export const DivProdutos = styled.div`
    display:flex;
    flex-wrap:wrap;
    gap: 6vw;
    justify-content:center;
    padding: 6vh 0;
`; 

export const Imagem = styled.div`
    display:flex;   
    flex-direction:column;
    height: 15vh;
    width: 15vw;
    background-image: url(${img});
    background-size: cover;
    background-position: center;
    margin-bottom: 1vh;
`;

export const Info = styled.div`
display: flex;
flex-direction: column;
`;

export const Preco = styled.div`
    color:red;
    font-weight:bold;
`;

export const Titulo = styled.div`
   height: 10vh;
   display:flex;
   justify-content: center;
   align-items:center;
   h1{
    border-bottom: 2px solid black;
}

`;
export const Nov = styled.div`
    color: red;
    padding: 1vh 0;
`;