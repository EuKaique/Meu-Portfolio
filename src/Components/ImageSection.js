import React from 'react';
import about from '../img/about.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="Sobre mim"/>
            </div>
            <div className="about-info">
                <h4>Quem sou<span> eu?</span></h4>
                <p className="about-text">
                   Trabalho com tecnologia da informação desde 2018. Atuei inicialmente como analista de sistemas, realizando a tradução de um banco de dados Oracle PL/SQL. No ano seguinte trabalhei brevemente como Técnico de informática, mas não me adequei a posição. Em Agosto de 2021 comecei a trabalhar como desenvolvedor full-stack PHP, foi um período bem desafiador, pois fiquei trabalhando sozinho como desenvolvedor por 4 meses, até contratarem outra pessoa para me ajudar. Em Julho de 2022 fui integrado a DuoSystem, empresa que estou atualmente, e que deu um UP na minha carreira, pois estou trabalhando com as tecnologias de ponta do mercado no desenvolvimento de software.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Nome Completo</p>
                        <p>Idade</p>
                    </div>
                    <div className="right-section">
                        <p>: Kaique Oliveira Santos</p>
                        <p>: 27 anos</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageSection;
