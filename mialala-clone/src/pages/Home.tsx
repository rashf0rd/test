import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const featuredProducts = [
        { id: 1, title: 'Product 1', price: 100, image: '/path/to/image1.jpg' },
        { id: 2, title: 'Product 2', price: 150, image: '/path/to/image2.jpg' },
        { id: 3, title: 'Product 3', price: 200, image: '/path/to/image3.jpg' },
    ];

    return (
        <div className="home">
            <Header />
            <Banner />
            <Carousel />
            <h2>Featured Products</h2>
            <div className="product-list">
                {featuredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Home;