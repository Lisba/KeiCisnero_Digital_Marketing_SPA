import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Footer } from '@components';

const Layout = ({ children }) => {
  return (
    <div className='App'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
