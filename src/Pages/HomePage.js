import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Olá, seja 
                    <span> Bem vindo(a).</span>
                </h1>
                <p className="h-sub-text">
                    Eu sou o Kaique, estudante e amante do mundo da tecnologia da informação.
                    Desenvolvo projetos front-end, criação de websites e consumo de API's usando
                    as tecnologias: html, css, javascript e seus frameworks e bibliotecas, possuo
                    conhecimento também de back-end: Node.JS, Banco de dados relacionais e não relacionais,
                    fique a vontade pra explorar o site ^^
                </p>
                <div className="icons">
                    <a href="https://www.facebook.com/kaique.oliveirasantos.547/" target="_blank" rel="noreferrer" className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </a>
                    <a href="https://www.instagram.com/kaique_o_s/" target="_blank" rel="noreferrer" className="icon-holder">
                        <FontAwesomeIcon icon={faInstagram} className="icon in" />
                    </a>
                    <a href="https://github.com/EuKaique" target="_blank" rel="noreferrer" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <a href="https://www.linkedin.com/in/kaique-oliveira-santos-0806a6a3/" target="_blank" rel="noreferrer" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon lk"/>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
