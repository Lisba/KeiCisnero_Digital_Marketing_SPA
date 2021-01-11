import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserDataForm } from '../../components'
import PropTypes from 'prop-types';

const NavButtons = ({ className }) => {
    const [showModal, setShowModal] = useState(false);
    const onClickHandler = () => setShowModal(prevState => !prevState);

    return (
        <div className={className}>
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
                <Link onClick={onClickHandler}>
                    Contáctame
                </Link>
            </div>
        </div>
    )
};

NavButtons.propTypes = {
    className: PropTypes.string,
};

export default NavButtons;
