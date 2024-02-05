import React from 'react'
import './ArtistCarousel.css'
import { Slide } from 'react-slideshow-image';

const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
}

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px',
}
const slideImages = [
    {
        url: '/src/assets/Paintings/slide1.webp',
        caption: 'Slide 1'
    },
    {
        url: '/src/assets/Paintings/slide2.webp',
        caption: 'Slide 2'
    },
    {
        url: '/src/assets/Paintings/slide3.webp',
        caption: 'Slide 3'
    },
    {
        url: '/src/assets/Paintings/slide4.webp',
        caption: 'Slide 4'
    },
];

const ArtistCarousel = () => {
    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div style={{ ...divStyle }}>
                            <img style={{ objectFit: 'cover' }} src={`${slideImage.url}`} />
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default ArtistCarousel