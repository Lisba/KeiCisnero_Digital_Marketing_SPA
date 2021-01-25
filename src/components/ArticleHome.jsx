import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Articles from '@entryPointArticles';
import { ArticleCard } from '@components';

const ArticleHome = () => {
  const classNameArticleCard = 'articleCard';
  const [homeOneClassName, setHomeOneClassName] = useState('hidden');
  const [homeTwoClassName, sethomeTwoClassName] = useState('hidden');
  const [homeThreeClassName, sethomeThreeClassName] = useState('hidden');
  const [homeFourClassName, sethomeFourClassName] = useState('hidden');
  let mounted = true;

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 180 && mounted) {
        setHomeOneClassName('upper1');
        sethomeTwoClassName('lower2');
        sethomeThreeClassName('upper3');
        sethomeFourClassName('lower4');
      }
    };
    return () => (mounted = false);
  }, []);

  return (
    <div className='articlesDiv'>
      <h1 className='titleArticles'>Artículos</h1>
      <div className='groupArticles'>
        <ul className='groupArticlesUl'>
          {Articles.map(
            (item) =>
              item.home && (
                <li
                  key={item.id}
                  className={`${
                    item.home === 1
                      ? homeOneClassName
                      : item.home === 2
                      ? homeTwoClassName
                      : item.home === 3
                      ? homeThreeClassName
                      : homeFourClassName
                  }`}
                >
                  <Link to={`/articles/${item.id}`} className={`articleLink card${item.home}`}>
                    <ArticleCard
                      className={classNameArticleCard}
                      icon={item.icon}
                      placeholderImage={
                        require('../assets/static/outdoors-entrepreneurshipPH.jpg').default
                      }
                      imgRoute={item.cover_image}
                      alt={item.cover_image}
                      title={item.title}
                      text={item.description}
                      imgContainer='articleCardImg'
                      textContainer='articleCardText'
                      width='250'
                      height='250'
                    />
                  </Link>
                </li>
              )
          )}
        </ul>
      </div>
      <div className='articleReadMoreButton'>
        <Link to='/articles'>
          <Button variant='primary'>Leer más {'>>>'}</Button>
        </Link>
      </div>
    </div>
  );
};

export default ArticleHome;
