import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, OnlineEntrepreneurshipRender, Gallery, NotFoundPage } from '../containers';
import { Layout, ArticleContent } from '../components';

const ArticleList = React.lazy(() => import('../containers/ArticleList'));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/articles'>
            <Suspense
              delayMs={500}
              fallback={
                <div className='lds-ring'>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              }
            >
              <ArticleList />
            </Suspense>
          </Route>

          <Route exact strict path='/articles/:id'>
            <ArticleContent />
          </Route>

          <Route exact path='/online-entrepreneurship'>
            <OnlineEntrepreneurshipRender alone />
          </Route>

          <Route exact path='/gallery'>
            <Gallery />
          </Route>

          <Route path='*'>
            <NotFoundPage />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
