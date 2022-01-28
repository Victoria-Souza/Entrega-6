import React from 'react';
import { DivProdutos, Imagem, Info, ListaProdutos, Preco, Titulo, Wrapper} from './styles';

export default function Produtos() {
    const Produto = [
        {nome: "Produto 1 ", desc: 'Descrição do Produto 1 ', preco: 'R$9,00 ', validade:'04/05/2022' },
        {nome: "Produto 2 " , desc:'Descrição do Produto 2 ', preco: 'R$8,50 ', validade:'20/05/2022' },
        {nome: "Produto 3 ", desc: 'Descrição do Produto 3 ', preco: 'R$9,10 ', validade:'19/11/2022' },
        {nome: "Produto 4 ", desc: 'Descrição do Produto 4 ', preco: 'R$11,00 ', validade:'20/02/2022' },
        {nome: "Produto 5 ", desc: 'Descrição do Produto 5 ', preco: 'R$9,45 ', validade:'15/04/2023' },
        {nome: "Produto 6 ", desc: 'Descrição do Produto 6 ', preco: 'R$10,60 ', validade:'02/01/2023' },
    ]
    const renderProdutos = Produto.map((produto,index)=>(
        <ListaProdutos key = {index}>
            <Imagem></Imagem>
            <Info>
                <h3>{produto.nome}</h3>
                <div>{produto.desc} </div>
                <p>Validade: {produto.validade}</p>
                <Preco>{produto.preco}</Preco>
            </Info>
        </ListaProdutos>
    ))

    return (
        <Wrapper>
            <Titulo><h1>Página de Produtos</h1></Titulo>
            <DivProdutos>{renderProdutos}</DivProdutos>
        </Wrapper>
    
    );
  }


