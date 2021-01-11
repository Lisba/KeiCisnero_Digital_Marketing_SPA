import React from 'react';
import { Link } from 'react-router-dom';
import SocialNetworks from './SocialNetworks';
import NavButtons from './NavButtons';

const Navbar = () => {

    const showMenu = () => {
        document.getElementById('burgerMenuOpened').style.left = '10%';
    }

    const hideMenu = () => {
        document.getElementById('burgerMenuOpened').style.left = '100%';
    }

    return (
        <nav className="navBarDiv">
            <Link to="/" className="logo"><img src={require('../assets/static/kei-cisnero.jpg').default} alt="logo"/></Link>
            <NavButtons className="buttons" />
            <div className="socialNetworkDiv">
                <SocialNetworks />
            </div>
            <div className="burgerMenu">
                <i className="fas fa-bars abrir" onClick={showMenu}></i>
            </div>
            <nav id="burgerMenuOpened" className="burgerMenuOpened" onClick={hideMenu}>
                <i className="fas fa-times cerrar"></i>
                <ul className="socialNetworksList">
                    <NavButtons className="burgerMenuButtons" />
                </ul>
            </nav>
        </nav>
    )
};

export default Navbar;
