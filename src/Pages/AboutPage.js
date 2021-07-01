import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';


function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'Sobre mim'} span={'Sobre mim'} />
            <ImageSection />
            <Tittle title={'Conhecimento'} span={'Conhecimento'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Html'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Css'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'JavaScript'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'React Js'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Node Js'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Python'} progress={'55%'} width={'55%'} />
                <SkillsSection skill={'Php'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Laravel'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'MySQL'} progress={'85%'} width={'85%'} />
                <SkillsSection skill={'Mongo DB'} progress={'60%'} width={'60%'} />
            </div>

            <Tittle title={'Serviços'} span={'Serviços'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Front-end'} 
                text={'Desenvolvimento de sites, toda a camada de interface, consumo de APIs.'}
                />
                <ServicesSection image={intelligence} title={'Back-end'} 
                text={'Modelo MVC, Auth e CRUD, lógica condicional, lógica de repetição dentre outras.'}
                />

                
            </div>  

        </div>
    )
}

export default AboutPage;
