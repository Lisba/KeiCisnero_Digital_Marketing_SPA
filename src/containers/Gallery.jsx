import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Gallery = () => {
  let images = [];

  for (let i = 1; i < 19; i++) {
    images.push(`assets/static/galeria${i}.jpg`);
  }

  return (
    <div className='gallery'>
      <Carousel autoPlay infiniteLoop stopOnHover={false}>
        {images.map((item, index) => (
          <div key={index}>
            <img className={'img'} src={require('../' + item).default} alt={item} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Gallery;
