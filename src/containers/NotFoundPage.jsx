import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div id='notfound'>
      <div className='notfound-bg'></div>
      <div className='notfound'>
        <div className='notfound-404'>
          <h1>404</h1>
        </div>
        <h2>Oops! Page Not Found</h2>
        <div className='notfound-social'>
          <a href='https://www.instagram.com/keicisnero/' target='_blank' rel='noopener noreferrer'>
            <i className='fa fa-instagram'></i>
          </a>
          <a
            href='https://api.whatsapp.com/send?phone=5491133833248&text=%C2%A1Qu%C3%A9%20maravilloso%20es%20que%20nadie%20necesite%20esperar%20ni%20un%20solo%20momento%20antes%20de%20comenzar%20a%20mejorar%20el%20mundo!%20'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fa fa-whatsapp'></i>
          </a>
          <a
            href='https://es.quora.com/profile/Keimarly-M%C3%A1rquez-Cisnero'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fa fa-quora'></i>
          </a>
          <a
            href='https://www.linkedin.com/in/keimarlymarquez/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fa fa-linkedin'></i>
          </a>
        </div>
        <Link to='/'>Back To Homepage</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
