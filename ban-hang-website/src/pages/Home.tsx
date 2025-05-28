import React from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to Our Online Store</h1>
                <ProductList />
            </main>
            <Footer />
        </div>
    );
};

export default Home;