import React, { Fragment, Suspense } from 'react';
import Start from '../components/Start';
import Circle from '../components/Circle';
import OnlineEntrepreneurship from './OnlineEntrepreneurship';
import Gallery from './Gallery';

const ArticleHome = React.lazy(() => import('../components/ArticleHome'));

const Home = () => {
    return (
        <Fragment>
            <Start />
            <Circle className="circle" src={require('../assets/static/keima.jpg')} alt="circle-image" />
            <Suspense fallback={<div className="suspense-div"><h1 className="suspense-h1">Loading Posts...</h1></div>}>
                <ArticleHome />
            </Suspense>
            <OnlineEntrepreneurship />
            <Gallery />
        </Fragment>
    )
}

export default Home