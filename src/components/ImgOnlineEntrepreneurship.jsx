import React from 'react';

const ImgOnlineEntrepreneurship = (props) => {
    return(
        <div className={props.classe}>
            <img src={props.src.default} alt={props.alt} />
        </div>
    )
}

export default ImgOnlineEntrepreneurship;