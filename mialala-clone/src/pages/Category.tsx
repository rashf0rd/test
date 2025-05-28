import React, { useEffect, useState } from 'react';
import { fetchProductsByCategory } from '../services/api';
import ProductCard from '../components/ProductCard';

const Category = ({ match }) => {
    const [products, setProducts] = useState([]);
    const categoryId = match.params.id;

    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchProductsByCategory(categoryId);
            setProducts(data);
        };
        getProducts();
    }, [categoryId]);

    return (
        <div className="category">
            <h2>Category Products</h2>
            <div className="product-list">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Category;