import React from 'react';
import { Link } from 'react-router-dom';

const NavButtons = (props) => {
    return(
        <div className={props.className}>
            <div>
                <Link to="/aboutme">
                    Sobre Mí
                </Link>
            </div>
            <div>
                <Link to="/">
                    Servicios
                </Link>
            </div>
            <div>
                <Link to="/articles">
                    Blog
                </Link>
            </div>
            <div>
                <Link to="/online-entrepreneurship">
                    Emprende Online
                </Link>
            </div>
            <div>
                <Link to="/gallery">
                    Galería
                </Link>
            </div>
        </div>
    )
}

export default NavButtons;