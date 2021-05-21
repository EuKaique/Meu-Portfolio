import React from 'react'
import ContactItem from '../Components/ContactItem';
import celular from '../img/phone.svg';
import email from '../img/emailme.svg';
import endereco from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'Contato'} span={'Contato'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                     {/* eslint-disable-next-line */}
                    <iframe src="https://maps.google.com/maps?q=avenida%20m%20boi%20gua%C3%A7u%20712&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={celular} text1={'+55 (11)95242-2368'} title={'Celular'}/>
                    <ContactItem icon={email} text1={'kaiqueols75@gmail.com'} title={'Email'}/>
                    <ContactItem icon={endereco} text1={'Av M Boi Guaçu'} text2={'São Paulo - SP'} title={'Endereço'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
