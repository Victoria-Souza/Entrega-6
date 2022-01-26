import styled from "styled-components";
import Geleia from "./Geleia.jpg";

export const Fundo = styled.div`
    background-image: url(${Geleia});
    height: 60vh;
    background-size: cover;
    background-position: center;
`;

export const Conteudo = styled.div`
    height: 60vh;
    background-color: #343a469a;
    opacity: 1.1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    word-spacing: 5px;
`;