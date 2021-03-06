import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { UserDataForm } from '@components';

const NavButtons = ({ className }) => {
  const [showModal, setShowModal] = useState(false);
  const onClickHandler = () => setShowModal((prevState) => !prevState);

  return (
    <>
      {showModal && <UserDataForm closeModal={setShowModal} />}
      <div className={className}>
        <div>
          <Link to='/articles'>Blog</Link>
        </div>
        <div>
          <Link to='/online-entrepreneurship'>Emprende Online</Link>
        </div>
        <div>
          <Link to='/gallery'>Galería</Link>
        </div>
        <div>
          <Link to='#' onClick={onClickHandler}>
            Contáctame
          </Link>
        </div>
      </div>
    </>
  );
};

NavButtons.propTypes = {
  className: PropTypes.string,
};

export default NavButtons;
