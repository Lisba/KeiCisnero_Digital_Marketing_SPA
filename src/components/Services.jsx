import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <>
            <h1>Servicios</h1>
            <button>
                <h2>CopyWriting</h2>
                <img height={50} src={require('../assets/static/logo-copywriting.svg')} alt="CopyWriting Logo"/>
                <p>Sin textos persuasivos no hay conversión</p>
            </button>
            <button>
                <h2>StoryTelling</h2>
                <img height={50} src={require('../assets/static/logo-storytelling.svg')} alt="StoryTelling Logo"/>
                <p>El arte de contar historias</p>
            </button>
            <button>
                <h2>Search Engine Marketing - SEM</h2>
                <img height={50} src={require('../assets/static/logo-sem.svg')} alt="SEM Logo"/>
                <p>Aumenta la visibilidad de tus productos y servicios</p>
            </button>
        </>
    )
}

export default Services;
