import React, { useState, useEffect } from 'react';

const ImgOnlineEntrepreneurship = (props) => {

    const [divClassName, setDivClassName] = useState('hidden');

    if(props.alone)
    {
        window.scroll({
            top: 0,
            left: 0,
        });
    }

    useEffect(() => {

        if(props.alone)
        {
            setDivClassName(props.classe);
        }
        else
        {
            function scrollHandler()
            {
                if(window.scrollY > 1250)
                {
                    setDivClassName(props.classe);
                }
            };
            window.addEventListener('scroll', scrollHandler, { passive: true });

            return function cleanUp()
            {
                window.removeEventListener('scroll', scrollHandler);
            }
        }

    }, []);

    return(
        <div className={divClassName}>
            <img src={props.src.default} alt={props.alt} />
        </div>
    )
}

export default ImgOnlineEntrepreneurship;