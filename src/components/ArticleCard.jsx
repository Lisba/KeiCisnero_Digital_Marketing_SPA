import React, { useState, useEffect } from 'react';

const ArticleCard = (props) => {

    const [loaded, setLoaded] = useState(false);
    const [currentSrc, setCurrentSrc] = useState(props.placeholderImage);

    useEffect(() => {
        let img = new Image();
        img.src = require(`../${props.icon}`).default;
        img.onload = () => {
            setCurrentSrc(img.src);
            setLoaded(true);
        }
    }, [props.icon])

    return(
        <div className={props.className}>
            <div className={props.imgContainer}>
                <img
                  style={{
                    opacity: loaded ? 1 : 0.5,
                    transition: "opacity .5s linear"
                  }}
                  src={currentSrc}
                  alt={props.icon}
                  width={props.width}
                  height={props.height}
                />
            </div>
            <div className={props.textContainer}>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default ArticleCard;