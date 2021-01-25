import React, { useState, Suspense } from 'react';
import { Start, Circle } from '@components';
import { OnlineEntrepreneurshipRender, Gallery } from '@containers';

const ArticleHome = React.lazy(() => import('../components/ArticleHome'));

const Home = () => {
  window.scroll({
    top: 0,
    left: 0,
  });

  const [loading, setLoading] = useState(true);
  const loadCompleted = [false, false];

  const startImage = new Image();
  const OnlineEntrepreneurshipImage = new Image();

  startImage.src = require('../assets/static/laptop-next-to-coffe-cup.jpg').default;
  OnlineEntrepreneurshipImage.src = require('../assets/static/woman-drinking-coffee.jpg').default;

  startImage.onload = () => {
    loadCompleted[0] = true;
    if (loadCompleted[0] && loadCompleted[1]) {
      setLoading(false);
    }
  };

  OnlineEntrepreneurshipImage.onload = () => {
    loadCompleted[1] = true;
    if (loadCompleted[0] && loadCompleted[1]) {
      setLoading(false);
    }
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
          <Start src={startImage.src} alt='laptop-next-to-coffe-cup' />
          <Circle
            className='circle'
            src={require('../assets/static/keima.jpg')}
            alt='circle-image'
          />
          <Suspense
            fallback={
              <div className='suspense-div'>
                <h1 className='suspense-h1'>Loading Posts...</h1>
              </div>
            }
          >
            <ArticleHome />
          </Suspense>
          <OnlineEntrepreneurshipRender alone={false} />
          <Gallery />
        </>
      )}
    </>
  );
};

export default Home;
