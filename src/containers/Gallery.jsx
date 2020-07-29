import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Gallery = () => {

    const images = [
        'assets/static/2-people-sitting-during-daytime.jpg',
        'assets/static/action-adult-adventure-beautiful.jpg',
        'assets/static/amsterdam-arch-bridge-architecture.jpg',
        'assets/static/art-beach-beautiful-clouds.jpg',
        'assets/static/backlit-beach-dawn-dusk.jpg',
        'assets/static/brown-hut-island-gazebo.jpg',
        'assets/static/reconectando con la naturaleza.jpg',
        'assets/static/cafe-camera.jpg',
        'assets/static/close-up-of-pictures.jpg',
        'assets/static/green-car-near-blue-ocean.jpg',
        'assets/static/paris-eiffel-tower.jpg',
        'assets/static/photography-of-airplane-during-sunrise.jpg'
    ];

    return(
        <div className="gallery">
            <Carousel autoPlay infiniteLoop stopOnHover={false} >
                {
                    images.map((item, index) => (
                            <div key={index}>
                                <img className={'img'} src={require('../' + item).default} alt={item} />
                            </div>
                        )
                    )
                }
            </Carousel>
        </div>
    )
}

export default Gallery;