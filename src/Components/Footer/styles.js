import styled from "styled-components";

export const Redes = styled.h4 `
    height: 2.5vh;
    cursor: pointer;
    &:hover{
        color:red;
    }
`;

export const Foot = styled.div `
    width: 100%;
    display: flex;
    justify-content:space-around;
    padding: 2vh ;
    background-color: gray;
    color: antiquewhite
`;

export const About = styled.div `
    width: 50vw;
    display: flex;
    flex-direction: column;
    gap: 2vh;
`;

export const RedesSociais = styled.div `
    display: flex;
    flex-direction: column;
    gap: 2vh;
`;
