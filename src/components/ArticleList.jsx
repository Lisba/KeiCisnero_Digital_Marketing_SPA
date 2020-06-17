import React from 'react';
import { Link } from 'react-router-dom';
import Articles from '../EntryPointArticles';
import ArticleCard from './ArticleCard';

const ArticleList = () => {

    return (
        <div className="articleCardListDiv">
            <ul className="articleCardListUl">
                {
                    Articles.map(item => (
                        <li key={item.id} className="aritcleCardListLi">
                            <Link to={`/articles/${item.id}`} className={`articleLinkList cardList${item.id}`}>
                                <ArticleCard className="articleCardListContainer" icon={item.icon} imgRoute={item.cover_image} alt={item.cover_image} title={item.title} text={item.description} imgContainer="articleListImg" textContainer="articleListText" width="300" height="300" />
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )

}

export default ArticleList;