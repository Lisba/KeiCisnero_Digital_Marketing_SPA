import React from 'react';

const SocialNetworks = () => {
  return (
    <>
      <div>
        <a
          className='instagram'
          href='https://www.instagram.com/keicisnero/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-instagram'></i>
        </a>
      </div>
      <div>
        <a
          className='wapp'
          href='https://api.whatsapp.com/send?phone=5491133833248&text=%C2%A1Qu%C3%A9%20maravilloso%20es%20que%20nadie%20necesite%20esperar%20ni%20un%20solo%20momento%20antes%20de%20comenzar%20a%20mejorar%20el%20mundo!%20'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-whatsapp'></i>
        </a>
      </div>
      <div>
        <a
          className='linkedin'
          href='https://www.linkedin.com/in/keimarlymarquez/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-linkedin-in'></i>
        </a>
      </div>
      <div>
        <a
          className='quora'
          href='https://es.quora.com/profile/Keimarly-M%C3%A1rquez-Cisnero'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-quora'></i>
        </a>
      </div>
      <div>
        <a
          className='facebook'
          href='https://www.facebook.com/Emprendedores-Online-100509058261824/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-facebook-f'></i>
        </a>
      </div>
    </>
  );
};

export default SocialNetworks;
