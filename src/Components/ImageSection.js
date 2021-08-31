import React from 'react';
import about from '../img/about.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>Quem sou<span> eu?</span></h4>
                <p className="about-text">
                   Estudante assíduo de programação, cursei ciência da computação, atualmente trabalho como analista programador,
                    meus hobbies são bom humor, música, leitura, jogos e programação
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Nome Completo</p>
                        <p>Idade</p>
                        <p>Nacionalidade</p>
                    </div>
                    <div className="right-section">
                        <p>: Kaique Oliveira Santos</p>
                        <p>: 25 anos</p>
                        <p>: Brasileira</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageSection;
