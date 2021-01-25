import React from 'react';
import { Parallax } from 'react-parallax';
import PropTypes from 'prop-types';

const Start = React.memo(({ src, alt = '' }) => {
  return (
    <div className='start'>
      <Parallax
        blur={0}
        bgImage={src}
        bgImageAlt={alt}
        strength={600}
        bgImageStyle={{ top: '-50%' }}
      >
        <h1>
          No sabes como empezar aunque sientes que es momento de emprender. Incursionemos juntos en
          el marketing digital
        </h1>
      </Parallax>
    </div>
  );
});

Start.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Start;
