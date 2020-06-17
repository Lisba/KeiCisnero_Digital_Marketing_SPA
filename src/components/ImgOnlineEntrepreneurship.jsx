import React from 'react';

const ImgOnlineEntrepreneurship = (props) => {
    
    const img = require('../' + props.src);

    return(
        <div className={props.classe}>
            <img src={img.default} alt={props.alt} />
        </div>
    )
}

export default ImgOnlineEntrepreneurship;