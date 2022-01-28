import React from 'react';
import { DivProdutos, Imagem, Info, ListaProdutos, Nov, Preco, Titulo, Wrapper} from './styles';
import { BsFillStarFill} from "react-icons/bs";

export default function Novidades() {
    const Produto = [
        {nome: "Novidade 1 ", desc: 'Descrição da Novidade 1 ', preco: 'R$19,00 ', validade:'04/05/2022', lancamento:'09/12/21' },
        {nome: "Novidade 2 " , desc:'Descrição da Novidade 2 ', preco: 'R$15,50 ', validade:'20/05/2022', lancamento:'09/11/21' },
        {nome: "Novidade 3 ", desc: 'Descrição da Novidade 3 ', preco: 'R$12,10 ', validade:'19/11/2022', lancamento:'18/01/22' },
        {nome: "Novidade 4 ", desc: 'Descrição da Novidade 4 ', preco: 'R$17,00 ', validade:'20/02/2022', lancamento:'05/01/22' },
        {nome: "Novidade 5 ", desc: 'Descrição da Novidade 5 ', preco: 'R$11,45 ', validade:'15/04/2023', lancamento:'22/12/21' },
        {nome: "Novidade 6 ", desc: 'Descrição da Novidade 6 ', preco: 'R$15,65 ', validade:'02/01/2023', lancamento:'17/11/21' },
    ]
    const renderProdutos = Produto.map((produto,index)=>(
        <ListaProdutos key = {index}>
            <Nov>
                <p><BsFillStarFill/> Novidades</p>
            </Nov>
            <Imagem></Imagem>
            <Info>
                <h3>{produto.nome}</h3>
                <div>{produto.desc} </div>
                <p>Data de lançamento: {produto.lancamento}</p>
                <p>Validade: {produto.validade}</p>
                <Preco>{produto.preco}</Preco>
            </Info>
        </ListaProdutos>
    ))

    return (
        <Wrapper>
            <Titulo><h1>Página de Novidades</h1></Titulo>
            <DivProdutos>{renderProdutos}</DivProdutos>
        </Wrapper>
    
    );
  }