export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    address: string;
}

export interface CartItem {
    productId: string;
    quantity: number;
}

export interface Cart {
    items: CartItem[];
    totalAmount: number;
}

export interface CheckoutInfo {
    name: string;
    email: string;
    address: string;
    paymentMethod: 'creditCard' | 'paypal';
}