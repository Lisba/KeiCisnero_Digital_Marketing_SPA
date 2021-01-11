import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ImageLoad = React.memo(({ src, placeholder, alt = "" }) => {
  const [loading, setLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState(placeholder);

  useEffect(() => {
    // start loading original image
    const imageToLoad = new Image();
    imageToLoad.src = src;
    imageToLoad.onload = () => {
      // When image is loaded replace the src and set loading to false
      setLoading(false);
      setCurrentSrc(src);
    }
  }, [src])

  return (
    <img
      src={currentSrc}
      style={{
        opacity: loading ? 0.5 : 1,
        transition: "opacity .5s linear"
      }}
      alt={alt}
      className="articleContentImg"
    />
  )
});

ImageLoad.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  placeholder: PropTypes.string,
};

export default ImageLoad;
