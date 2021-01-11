import React from 'react';
import PropTypes from 'prop-types';

const Circle = ({ className, src, alt }) => {
    return(
        <div className={className}><img src={src.default} alt={alt} /></div>
    )
};

Circle.propTypes = {
    className: PropTypes.string,
    src: PropTypes.object,
    alt: PropTypes.string,
};

export default Circle;
