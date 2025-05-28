import React from 'react';
import { Carousel as AntCarousel } from 'antd';
import 'antd/dist/antd.css';

const Carousel = () => {
    const images = [
        'https://via.placeholder.com/800x400?text=Slide+1',
        'https://via.placeholder.com/800x400?text=Slide+2',
        'https://via.placeholder.com/800x400?text=Slide+3',
    ];

    return (
        <AntCarousel autoplay>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
                </div>
            ))}
        </AntCarousel>
    );
};

export default Carousel;