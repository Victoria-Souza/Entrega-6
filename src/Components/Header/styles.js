import styled from "styled-components";

export const MenuItem = styled.ul `
    height: 4vh;
    cursor: pointer;
    align-items:center;
    a{
        font-size:2.1vh;
        font-weight:bold;
        text-decoration: none;
        color: antiquewhite
    }
    a:hover{
        color:red;
    }
    &:hover{
        color:red;
        border-bottom: 2px solid silver;
    }

`;


export const Head = styled.div`
    width:100%;
    display: flex;
    justify-content:space-between;
    padding-top: 2vh ;
    padding-bottom: 2vh ;
    background-color: #5e5a5a;
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
color: antiquewhite;
font-weight: bold;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 3px solid antiquewhite;
border-radius: 5px;
background-color: #5e5a5a;
cursor: pointer;
&:hover{
    background-color:red;
    border: 3px solid red;
`;
