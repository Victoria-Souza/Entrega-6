import React from 'react';
import { BsFillImageFill } from "react-icons/bs";
import { DivProdutos, ListaProdutos, Wrapper } from './styles';

export default function Produtos() {
    const Produtos = [
        {nome: "Produto 1 ", imagem: <BsFillImageFill/>, desc: 'Descrição do Produto 1 ', preco: 'R$9,00 ', validade:'04/05/2022' },
        {nome: "Produto 2 ", imagem: <BsFillImageFill/>, desc: 'Descrição do Produto 2 ', preco: 'R$8,50 ', validade:'20/05/2022' },
        {nome: "Produto 3 ", imagem: <BsFillImageFill/>, desc: 'Descrição do Produto 3 ', preco: 'R$9,10 ', validade:'19/11/2022' },
        {nome: "Produto 4 ", imagem: <BsFillImageFill/>, desc: 'Descrição do Produto 4 ', preco: 'R$11,00 ', validade:'20/02/2022' },
        {nome: "Produto 5 ", imagem: <BsFillImageFill/>, desc: 'Descrição do Produto 5 ', preco: 'R$9,45 ', validade:'15/04/2023' },
        {nome: "Produto 6 ", imagem: <BsFillImageFill/>, desc: 'Descrição do Produto 6 ', preco: 'R$10,60 ', validade:'02/01/2023' },
    ]
    const renderProdutos = Produtos.map((produto,index)=>(
        <ListaProdutos key = {index}>
            {produto.imagem}
            {produto.nome}
            {produto.desc}
            {produto.preco}
            {produto.validade}
        </ListaProdutos>
    ))

    return (
        <Wrapper>
            <DivProdutos>{renderProdutos}</DivProdutos>
        </Wrapper>
    
    );
  }


