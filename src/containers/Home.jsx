import React, { useState, Fragment, Suspense } from 'react';
import Start from '../components/Start';
import Circle from '../components/Circle';
import OnlineEntrepreneurship from './OnlineEntrepreneurship';
import Gallery from './Gallery';

const ArticleHome = React.lazy(() => import('../components/ArticleHome'));

const Home = () => {

    const [loading, setLoading] = useState(true);
    const loadCompleted = [false, false];

    const startImage = new Image();
    const OnlineEntrepreneurshipImage = new Image();
    startImage.src = require('../assets/static/laptop-next-to-coffe-cup.jpg').default;
    OnlineEntrepreneurshipImage.src = require('../assets/static/woman-drinking-coffee.jpg').default;
    startImage.onload = () => {
        loadCompleted[0] = true;
        if(loadCompleted[0] && loadCompleted[1])
        {
            setLoading(false);
        }
    }
    OnlineEntrepreneurshipImage.onload = () => {
        loadCompleted[1] = true;
        if(loadCompleted[0] && loadCompleted[1])
        {
            setLoading(false);
        }
    }

    return (
        <Fragment>
            {loading ? <div className="lds-ring"><div></div><div></div><div></div><div></div></div> :
                <Fragment>
                    <Start src={startImage.src} alt='laptop-next-to-coffe-cup' />
                    <Circle className="circle" src={require('../assets/static/keima.jpg')} alt="circle-image" />
                    <Suspense fallback={<div className="suspense-div"><h1 className="suspense-h1">Loading Posts...</h1></div>}>
                        <ArticleHome />
                    </Suspense>
                    <OnlineEntrepreneurship src={OnlineEntrepreneurshipImage.src} />
                    <Gallery />
                </Fragment>
            }
        </Fragment>
    )
}

export default Home