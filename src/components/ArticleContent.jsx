import React, { useState, useEffect, Suspense, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import Articles from '../EntryPointArticles';
import NotFoundPage from './NotFoundPage';

const Post = React.lazy( () => import(`./Post`));

const ArticleContent = () => {
    
    let { id } = useParams();
    let parsedId = parseInt(id); // For use strict equality operator below.
    const [post, setPost] = useState('');
    let articleData = {};
    let boolean = false;
    
    Articles.map(item => 
    {
        if(item.id === parsedId)
        {
            articleData = item;
            boolean = true;
        }
        return boolean;
    });
    
    const img = require('../' + articleData.cover_image);
    
    useEffect( () => {

        import(`../assets/posts/post${parsedId}.mdx`) //With native promise method.
        .then(response => setPost(response.default))
        .catch(error => console.log(error.message))
        // const MDXPost = await import(`../posts/post${parsedId}.mdx`); //With Asyn/Await method.
        // const postObj = require('../posts/post' + parsedId + '.mdx'); //With require() method.
        // setPost(postObj.default)

    }, [parsedId]);

    return (
        <Fragment>
            {
                (!boolean) ? <NotFoundPage /> :
                <React.Fragment>
                    <article className="articleContent">
                        <div className="articleContentHeader">
                            <div className="articleContentTitleDiv"><h1 className="articleContentTitle">{articleData.title}</h1></div>
                            <div className="articleContentAuthor">{articleData.author.name}</div>
                            <div className="articleContentDate">{articleData.date}</div>
                            <div className="articleContentImgDiv"><img className="articleContentImg" src={img.default} alt="img"/></div>
                        </div>
                        <div className="articleContentBody">
                            <Suspense fallback={<div className="suspense-div"><h1 className="suspense-h1">Loading Post...</h1></div>}>
                                <Post postContent={post}/>
                            </Suspense>
                        </div>
                    </article>
                </React.Fragment>
            } {/*This ternary operator for the case a Dynamic Route doesn't exist*/}
        </Fragment>
    )
}

export default ArticleContent;