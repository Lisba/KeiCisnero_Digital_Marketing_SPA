import React, { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Articles from '@entryPointArticles';
import { NotFoundPage } from '@containers';
import { ShareButtons, LoadImage } from '@components';
import { SITE_URL } from '@helpers';

const Post = React.lazy(() => import(`./Post`));

const ArticleContent = () => {
  const [post, setPost] = useState('');
  let { id } = useParams();
  let { pathname } = useLocation();
  let currentUrl = SITE_URL + pathname;
  let parsedId = parseInt(id); // For use strict equality operator below.
  let articleData = {};
  let boolean = false;

  window.scroll({
    top: 0,
    left: 0,
    behavior: 'auto',
  });

  Articles.map((item) => {
    if (item.id === parsedId) {
      articleData = item;
      boolean = true;
    }
    return boolean;
  });

  useEffect(() => {
    import(`../assets/posts/post${parsedId}.mdx`) //With native promise method.
      .then((response) => setPost(response.default))
      .catch((error) => console.log(error.message));
    // const MDXPost = await import(`../posts/post${parsedId}.mdx`); //With Asyn/Await method.
    // const postObj = require('../posts/post' + parsedId + '.mdx'); //With require() method.
    // setPost(postObj.default)
  }, [parsedId]);

  return (
    <>
      {/*This ternary operator for the case a Dynamic Route doesn't exist*/}
      {!boolean ? (
        <NotFoundPage />
      ) : (
        <>
          <article className='articleContent'>
            <div className='articleContentHeader'>
              <div className='articleContentTitleDiv'>
                <h1 className='articleContentTitle'>{articleData.title}</h1>
              </div>
              <div className='articleContentAuthor'>{articleData.author.name}</div>
              <div className='articleContentDate'>{articleData.date}</div>
              <LoadImage
                src={require('../' + articleData.cover_image).default}
                placeholder={require('../' + articleData.placeHolder_Image).default}
                alt='img'
              />
            </div>
            <div className='articleContentBody'>
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
                {post && <Post postContent={post} />}
              </Suspense>
            </div>
            <ShareButtons currentUrl={currentUrl} />
          </article>
        </>
      )}
    </>
  );
};

export default ArticleContent;
