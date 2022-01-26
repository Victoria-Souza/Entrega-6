import React from 'react';
import { BsWhatsapp,BsFacebook,BsInstagram } from "react-icons/bs";
import { About, Foot, Redes, RedesSociais } from './styles';

export default function Footer() {
    const itensRedes = [
        {nome: "Whatsapp", icone: <BsWhatsapp /> },
        {nome: "Facebook", icone: <BsFacebook />},
        {nome: "Instagram", icone: <BsInstagram />}
    ]
    const renderRedes = itensRedes.map((item,index)=>(
        <Redes key = {index}>
            {item.icone}
            {item.nome}
        </Redes>
    ))
    return(
        <Foot>
            <About>
                <h2>Sobre a empresa</h2>
                <p>A empresa foi fundada em 1956, por Giuliano Mendes. Ela também é premiada como a melhor geléia do país por 5 anos consecutivos.</p>
            </About>
            <RedesSociais>
                <h2>REDES SOCIAIS</h2>
                {renderRedes}
            </RedesSociais>
        </Foot>
    )

}