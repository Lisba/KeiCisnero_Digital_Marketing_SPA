import React, { useState } from 'react';
import SocialNetworks from './SocialNetworks';
import NavButtons from './NavButtons';
import UserDataForm from './UserDataForm';

const Footer = () => {
    const [showModal, setShowModal] = useState(false);
    const onClickHandler = () => setShowModal(prevState => !prevState);

    return(
        <div className="footer">
            <div className="name">
                <h3>Kei Cisnero</h3>
                <p>Profesional del Marketing Digital - Técnico universitario en Administración y Gerencia.</p>
            </div>
            <div className="navButtons">
                <h3>Navegacion</h3>
                <NavButtons className="groupFooterButtons" />
            </div>
            <div className="socialNetworks">
                <h3>Sígueme:</h3>
                <div>
                    <SocialNetworks />
                </div>
            </div>
            <div className="finalFooter">
                {showModal && <UserDataForm closeModal={setShowModal} />}
                <p onClick={onClickHandler}>Copyright ©2020 All rights reserved | This web is made with <span className="heart"><i className="fas fa-heart"></i></span> by Lisbaldy Ojeda Leon</p>
                <span><a className="wapp" href="https://api.whatsapp.com/send?phone=5491132307105&text=" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a></span>
                <span><a className="linkedin" href="https://www.linkedin.com/in/lisbaldyojeda/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></span>
            </div>
        </div>
    )
}

export default Footer;