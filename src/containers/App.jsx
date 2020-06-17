import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import ArticleContent from '../components/ArticleContent';
import OnlineEntrepreneurship from '../components/OnlineEntrepreneurship';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import Circle from '../components/Circle';
import NotFound from '../components/NotFoundPage';

const ArticleHome = React.lazy(() => import('../components/ArticleHome'));
const ArticleList = React.lazy(() => import('../components/ArticleList'));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact strict path="/articles/:id">
              <ArticleContent />
          </Route>

          <Route exact path="/gallery">
            <Gallery />
          </Route>
          
          <Route exact path="/online-entrepreneurship">
            <OnlineEntrepreneurship />
          </Route>
          
          <Route exact path="/articles">
            <Suspense fallback={<div className="suspense-div"><h1 className="suspense-h1">Loading Posts...</h1></div>}>
              <ArticleList />
            </Suspense>
          </Route>
          
          <Route exact path="/">
            <Home />
            <Circle className="circle" src={require('../assets/static//keima.jpg')} alt="circle-image" />
            <Suspense fallback={<div className="suspense-div"><h1 className="suspense-h1">Loading Posts...</h1></div>}>
              <ArticleHome />
            </Suspense>
            <OnlineEntrepreneurship />
            <Gallery />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
