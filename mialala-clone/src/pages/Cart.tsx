import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../store/slices/cartSlice';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const handleRemove = (itemId) => {
        dispatch(removeFromCart(itemId));
    };

    const handleCheckout = () => {
        // Logic to navigate to the checkout page
    };

    return (
        <div className="cart">
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                <div>
                                    <img src={item.image} alt={item.title} />
                                    <h3>{item.title}</h3>
                                    <p>Price: ${item.price}</p>
                                    <button onClick={() => handleRemove(item.id)}>Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleCheckout}>Proceed to Checkout</button>
                </div>
            )}
        </div>
    );
};

export default Cart;