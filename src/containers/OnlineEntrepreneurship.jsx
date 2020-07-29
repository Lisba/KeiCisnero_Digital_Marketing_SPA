import React from 'react';
import { Link }from 'react-router-dom';
import { Parallax } from 'react-parallax';
import ImgOnlineEntrepreneurship from '../components/ImgOnlineEntrepreneurship';
import Articles from '../EntryPointArticles'

const OnlineEntrepreneurship = () => {

    return(
        <div className="online-entrepreneurship">
            <Parallax blur={0} bgImage={require('../assets/static/woman-drinking-coffee.jpg').default} bgImageAlt="computer-desk" strength={600} bgImageStyle={{top:'-50%'}} >
                <h1>Emprende Online</h1>
            </Parallax>
            <ul>
                {
                    Articles.map(item =>
                    ( (item.id >= 5 && item.id <= 8) &&
                        <Link key={item.id} to={`/articles/${item.id}`}>
                            <ImgOnlineEntrepreneurship classe={`div${item.id}`} src={require('../' + item.icon_Online_Entrepreneurship)} alt={item.title} />
                        </Link>
                    ))
                }
            </ul>
        </div>
    )
}

export default OnlineEntrepreneurship;