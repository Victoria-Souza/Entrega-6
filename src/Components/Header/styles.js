import styled from "styled-components";

export const MenuItem = styled.h4 `
    height: 4vh;
    cursor: pointer;
    align-items:center;
    &:hover{
        color:red;
        border-bottom: 2px solid silver;
    }
`;

export const Head = styled.div`
    display: flex;
    justify-content:space-between;
    padding-top: 2vh ;
    padding-bottom: 2vh ;
    background-color: gray;
    color: antiquewhite
    
`;

export const HeaderName = styled.h1`
   padding-left: 2vw;
`;

export const HeaderMenu = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;
    gap: 3vw;
`;

export const Button = styled.button`
color: red;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 3px solid red;
border-radius: 5px;
background-color: antiquewhite;
cursor: pointer;
`;
