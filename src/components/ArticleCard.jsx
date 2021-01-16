import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ArticleCard = ({
  className,
  icon,
  placeholderImage,
  imgContainer,
  width,
  height,
  textContainer,
  title,
  text,
  alt,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(placeholderImage);

  useEffect(() => {
    let img = new Image();
    img.src = require(`../${icon}`).default;
    img.onload = () => {
      setCurrentSrc(img.src);
      setLoaded(true);
    };
  }, [icon]);

  return (
    <div className={className}>
      <div className={imgContainer}>
        <img
          style={{
            opacity: loaded ? 1 : 0.5,
            transition: 'opacity .5s linear',
          }}
          src={currentSrc}
          alt={alt}
          width={width}
          height={height}
        />
      </div>
      <div className={textContainer}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

ArticleCard.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  placeholderImage: PropTypes.string,
  imgContainer: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  textContainer: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  alt: PropTypes.string,
  imgRoute: PropTypes.string,
};

export default ArticleCard;
