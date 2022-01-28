import React from 'react';
import { NossasInstalacoes, NossosProdutos, Wrapper } from './styles';

export default function Inicio() {
    return (
    <Wrapper>
        <NossosProdutos>
            <h1>Sobre os Nossos Produtos</h1>
            <p>&nbsp; &nbsp;A nossa empresa está no mercado há mais de 20 anos. E além de termos a 
                melhor produção do mercado, sendo todas as nossas frutas frescas e selecionadas manualmente 
                antes do cozimento e a utilizarmos dos melhores equipamentos e consultores presentes no país, 
                inovamos e agora possuímos mais um diferencial, a validade de nossas geleias de morango. 
                A partir de agora todas as geleias que irão chegar na casa de nossos clientes vão ter a validade de 
                5 meses após a fabricação, e não 2 meses como era comercializada anteriormente. Isso tudo para entregarmos 
                cada vez mais produtos com alto padrão de qualidade para todos. Compre e experimente a melhor geleia do Brasil.</p>
        </NossosProdutos>
        <NossasInstalacoes>
            <h1>Venha nos visitar!</h1>
            <p>&nbsp; &nbsp; Recentemente reformamos nossas instalações de acordo com as Boas Práticas de Fabricação! Isso tudo em prol de vocês! Queremos dispor das melhores 
                instalações possíveis para receber nossos clientes e aumentar nosso contato com vocês. Assim, podemos passar o máximo de transparência possível 
                em relação à produção do nosso produto, que á algo que prezamos muito por aqui!</p>
        </NossasInstalacoes>
    </Wrapper>
    
    );

}