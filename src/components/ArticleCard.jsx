import React from 'react';

const ArticleCard = (props) => {
    return(
        <div className={props.className}>
            <div className={props.imgContainer}>
                <img src={require('../' + props.icon).default} alt={props.icon} width={props.width} height={props.height} />
            </div>
            <div className={props.textContainer}>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default ArticleCard;