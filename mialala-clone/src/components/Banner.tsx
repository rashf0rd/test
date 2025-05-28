import React from 'react';

const Banner = () => {
    return (
        <div className="banner">
            <img src="/path/to/your/banner-image.jpg" alt="Promotional Banner" />
            <div className="banner-content">
                <h1>Welcome to Mialala</h1>
                <p>Discover the best products at unbeatable prices!</p>
                <button className="shop-now">Shop Now</button>
            </div>
        </div>
    );
};

export default Banner;