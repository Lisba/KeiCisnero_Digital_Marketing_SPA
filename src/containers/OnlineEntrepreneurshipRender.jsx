import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { OnlineEntrepreneurship } from '@components';

const OnlineEntrepreneurshipRender = ({ alone }) => {
  const [loading, setLoading] = useState(true);

  const OnlineEntrepreneurshipImage = new Image();
  OnlineEntrepreneurshipImage.src = require('../assets/static/woman-drinking-coffee.jpg').default;

  OnlineEntrepreneurshipImage.onload = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <div className='lds-ring'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <>
          <OnlineEntrepreneurship src={OnlineEntrepreneurshipImage.src} alone={alone} />
        </>
      )}
    </>
  );
};

OnlineEntrepreneurshipRender.propTypes = {
  alone: PropTypes.bool,
};

export default OnlineEntrepreneurshipRender;
