import React from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import ImgOnlineEntrepreneurship from './ImgOnlineEntrepreneurship';
import Articles from '../EntryPointArticles';
import PropTypes from 'prop-types';

const OnlineEntrepreneurship = ({ src, alone }) => {
  return (
    <div className='online-entrepreneurship'>
      <Parallax
        blur={0}
        bgImage={src}
        bgImageAlt='computer-desk'
        strength={600}
        bgImageStyle={{ top: '-50%' }}
      >
        <h1>Emprende Online</h1>
      </Parallax>
      <ul>
        {Articles.map(
          (item) =>
            item.id >= 5 &&
            item.id <= 8 && (
              <Link key={item.id} to={`/articles/${item.id}`}>
                <ImgOnlineEntrepreneurship
                  classe={`div${item.id}`}
                  src={require('../' + item.icon_Online_Entrepreneurship)}
                  alt={item.title}
                  alone={alone}
                />
              </Link>
            )
        )}
      </ul>
    </div>
  );
};

OnlineEntrepreneurship.propTypes = {
  src: PropTypes.string,
  alone: PropTypes.bool,
};

export default OnlineEntrepreneurship;
