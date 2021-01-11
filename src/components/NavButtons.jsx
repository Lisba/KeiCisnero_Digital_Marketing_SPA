import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserDataForm } from '../components'

const NavButtons = (props) => {
    const [showModal, setShowModal] = useState(false);
    const onClickHandler = () => setShowModal(prevState => !prevState);

    return (
        <div className={props.className}>
            {showModal && <UserDataForm closeModal={setShowModal} />}
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
            <div>
                <Link to="/" onClick={onClickHandler}>
                    Contáctame
                </Link>
            </div>
        </div>
    )
}

export default NavButtons;