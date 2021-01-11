import React, { useState, useEffect, Fragment, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import Articles from '../EntryPointArticles';
import NotFoundPage from '../containers/NotFoundPage';
import LoadImage from './LoadImage';

const Post = React.lazy(() => import(`./Post`));

const ArticleContent = () => {
    let { id } = useParams();
    let parsedId = parseInt(id); // For use strict equality operator below.
    const [post, setPost] = useState('');
    let articleData = {};
    let boolean = false;

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'auto'
    });

    Articles.map(item =>
    {
        if(item.id === parsedId)
        {
            articleData = item;
            boolean = true;
        }
        return boolean;
    });

    useEffect(() => {
        import(`../assets/posts/post${parsedId}.mdx`) //With native promise method.
        .then(response => setPost(response.default))
        .catch(error => console.log(error.message))
        // const MDXPost = await import(`../posts/post${parsedId}.mdx`); //With Asyn/Await method.
        // const postObj = require('../posts/post' + parsedId + '.mdx'); //With require() method.
        // setPost(postObj.default)
    }, [parsedId]);

    return (
        <Fragment>
            {/*This ternary operator for the case a Dynamic Route doesn't exist*/}
            {
                (!boolean) ? <NotFoundPage /> :
                <Fragment>
                    <article className="articleContent">
                        <div className="articleContentHeader">
                            <div className="articleContentTitleDiv">
                                <h1 className="articleContentTitle">{articleData.title}</h1>
                            </div>
                            <div className="articleContentAuthor">{articleData.author.name}</div>
                            <div className="articleContentDate">{articleData.date}</div>
                            <LoadImage
                                src={require('../' + articleData.cover_image).default}
                                placeholder={require('../' + articleData.placeHolder_Image).default}
                                alt="img"
                            />
                        </div>
                        <div className="articleContentBody">
                            <Suspense delayMs={500} fallback={<div className="lds-ring"><div></div><div></div><div></div><div></div></div>}>
                                {post && <Post postContent={post}/>}
                            </Suspense>
                        </div>
                    </article>
                </Fragment>
            }
        </Fragment>
    )
};

export default ArticleContent;
