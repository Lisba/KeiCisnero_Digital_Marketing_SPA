import React from 'react';
import { Link } from 'react-router-dom';
import ArticleCard from './ArticleCard';
import Articles from '../EntryPointArticles';
import Button from 'react-bootstrap/Button';

const ArticleHome = () => {

    const classNameArticleCard = "articleCard";

    return(
        <div className="articlesDiv">
            <h1 className="titleArticles">Artículos</h1>
            <div className="groupArticles">
                <ul className="groupArticlesUl">
                    {
                        Articles.map((item) => 
                            ( (item.id <= 4) &&
                                <li key={item.id} className={`${item.id % 2 === 0 ? 'lower' : 'upper'}`}>
                                    <Link to={`/articles/${item.id}`} className={`articleLink card${item.id}`}>
                                        <ArticleCard className={classNameArticleCard} icon={item.icon} imgRoute={item.cover_image} alt={item.cover_image} title={item.title} text={item.description} imgContainer="articleCardImg" textContainer="articleCardText" width="250" height="250" />
                                    </Link>
                                </li> 
                            )
                        )
                    }
                </ul>
            </div>
            <div className="articleReadMoreButton">
                <Link to="/articles">
                    <Button variant="primary">Leer más</Button>
                </Link>
            </div>
        </div>
    )
}

export default ArticleHome;