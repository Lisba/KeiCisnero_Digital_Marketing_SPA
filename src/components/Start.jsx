import React from 'react';
import { Parallax } from 'react-parallax';

const Start = () => {
    return(
        <div className="start">
            <Parallax
            blur={0}
            bgImage={require('../assets/static/laptop-next-to-coffe-cup.jpg').default}
            bgImageAlt="womanInSofa"
            strength={600}
            bgImageStyle={{top:'-50%'}}
            >
                <h1>No sabes como empezar aunque sientes que es momento de emprender. Incursionemos juntos en el marketing digital</h1>
            </Parallax>
        </div>
    )
}

export default Start;