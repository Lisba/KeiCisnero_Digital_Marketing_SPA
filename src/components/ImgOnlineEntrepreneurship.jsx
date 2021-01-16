import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ImgOnlineEntrepreneurship = ({ classe, src, alone, alt }) => {
  const [divClassName, setDivClassName] = useState('hidden');

  if (alone) {
    window.scroll({
      top: 0,
      left: 0,
    });
  }

  useEffect(() => {
    if (alone) {
      setDivClassName(classe);
    } else {
      function scrollHandler() {
        if (window.scrollY > 1250) {
          setDivClassName(classe);
        }
      }
      window.addEventListener('scroll', scrollHandler, { passive: true });

      return function cleanUp() {
        window.removeEventListener('scroll', scrollHandler);
      };
    }
  }, []);

  return (
    <div className={divClassName}>
      <img src={src.default} alt={alt} />
    </div>
  );
};

ImgOnlineEntrepreneurship.propTypes = {
  classe: PropTypes.string,
  src: PropTypes.object,
  alone: PropTypes.bool,
  alt: PropTypes.string,
};

export default ImgOnlineEntrepreneurship;
