import React from 'react';
import about from '../img/about.PNG';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>Quem é o <span>Kaique?</span></h4>
                <p className="about-text">
                    Brevemente, apresentarei informações importantes sobre mim:
                    Tenho 25 anos de idade, Solteiro, residente em São Paulo - SP,
                    Procuro uma oportunidade profissional como Desenvolvedor
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Nome Completo</p>
                        <p>Idade</p>
                        <p>Nacionalidade</p>
                        <p>Endereço</p>
                    </div>
                    <div className="right-section">
                        <p>: Kaique Oliveira Santos</p>
                        <p>: 25 anos</p>
                        <p>: Brasileira</p>
                        <p>: Avenida M Boi Guaçu</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageSection;
