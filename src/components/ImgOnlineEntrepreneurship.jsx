import React, { useState, useEffect } from 'react';

const ImgOnlineEntrepreneurship = (props) => {

    const [divOneClassName, setDivOneClassName] = useState('hidden');
    // const [divTwoClassName, setDivTwoClassName] = useState('hidden');
    // const [divThreeClassName, setDivThreeClassName] = useState('hidden');
    // const [divFourClassName, setDivFourClassName] = useState('hidden');

    useEffect(() => {
        function scrollHandler()
        {
            if(window.scrollY > 1173)
            {
                setDivOneClassName(props.classe);
            }
        };

        window.addEventListener('scroll', scrollHandler, { passive: true });

        return function cleanUp()
        {
            window.removeEventListener('scroll', scrollHandler);
        }
    }, []);

    return(
        <div className={divOneClassName}>
            <img src={props.src.default} alt={props.alt} />
        </div>
    )
}

export default ImgOnlineEntrepreneurship;