import React from 'react';
import { BsLayoutTextSidebarReverse,BsFillStarFill, BsFillHouseFill } from "react-icons/bs";
import {Button, Head, HeaderMenu, HeaderName, MenuItem} from './styles';
import { Link } from 'react-router-dom';

export default function Header() {
    const itensMenu = [
        {nome: "Início", icone: <BsFillHouseFill />, path:"/" },
        {nome: "Produtos", icone: <BsLayoutTextSidebarReverse />, path:"/Produtos" },
        {nome: "Novidades", icone: <BsFillStarFill />, path:"/Novidades"},
        
    ]
    const renderList = itensMenu.map((item,index)=>(
        <MenuItem key = {index}>
            {item.icone}
            <Link to = {item.path}>
                {item.nome}
            </Link>
        </MenuItem>
    ))
  return(
    <Head>
        <HeaderName>GELÉIAS</HeaderName>
        <HeaderMenu>
                {renderList}
        </HeaderMenu>
        <Button>Entrar</Button>
    </Head>
  )
}
