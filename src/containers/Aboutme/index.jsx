import React from 'react';
import './styles.scss';

const Aboutme = () => {
  return (
    <div className='aboutMeDiv'>
      <div className='aboutmeContent'>
        <div className='aboutmePhotoDiv'>
          <img src={require('../../assets/static/aboutme.jpg').default} alt='Keima' />
          <p>
            Egresada Universitaria en Administración y Gerencia especializada en Marketing Digital.
          </p>
        </div>
        <div className='aboutmeSubTitles'>
          <h1>Soy Kei Cisnero. Marketer Digital y Redactora de Contenidos.</h1>
          <p>Te ayudo aprovechar tus redes sociales al máximo.</p>
          <p>Pasa de creativo a creador de contenidos.</p>
          <p>Obten los resultados que siempre soñaste con copys que enamoren.</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
