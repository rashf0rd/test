import React from 'react';

interface ProductCardProps {
    product: {
        id: number;
        title: string;
        price: number;
        imageUrl: string;
    };
    onAddToCart: (productId: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
    return (
        <div className="product-card">
            <img src={product.imageUrl} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => onAddToCart(product.id)}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;