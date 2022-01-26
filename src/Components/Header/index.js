import React from 'react';
import { BsLayoutTextSidebarReverse,BsFillStarFill,BsFillBasketFill } from "react-icons/bs";
import { Button, Head, HeaderMenu, HeaderName, MenuItem} from './styles';

export default function Header() {
    const itensMenu = [
        {nome: "Produtos", icone: <BsLayoutTextSidebarReverse /> },
        {nome: "Novidades", icone: <BsFillStarFill />},
        {nome: "Carrinho de Compras", icone: <BsFillBasketFill />}
    ]
    const renderList = itensMenu.map((item,index)=>(
        <MenuItem key = {index}>
            {item.icone}
            {item.nome}
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
