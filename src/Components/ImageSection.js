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
                   Estudante assíduo de programação, cursei ciência da computação, trabalhei como analista de sistemas, 
                   e atualmente trabalho como freelancer. Estou disponível para novas oportunidades :D
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
