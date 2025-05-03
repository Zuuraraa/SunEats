import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

   
    
    const addToCart = (item) => {
        console.log("Adding item:", item); // Debugging
    
        setCartItems((prev) => {
            console.log("Current cart:", prev); // Cek isi cart sebelum update
            
            const existingItem = prev.find((cartItem) => cartItem._id === item._id);
            
            if (existingItem) {
                console.log("Item already exists, updating quantity");
                return prev.map((cartItem) =>
                    cartItem._id === item._id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                console.log("Adding new item");
                return [...prev, { ...item, quantity: 1 }];
            }
        });
    };
    
    const updateQuantity = (_id, newQuantity) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item._id === _id ? { ...item, quantity: newQuantity } : item
            )
        );
    };
    
    const removeFromCart = (_id) => {
        setCartItems((prev) => prev.filter((item) => item._id !== _id));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
