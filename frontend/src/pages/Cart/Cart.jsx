import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { assets } from "../../assets/assets";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, updateQuantity } = useContext(CartContext);

  const deliveryFee = 20; 
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + deliveryFee;

  return (
    <div className="cart-container">
      <h1 className="heading1">My Delicious Meals</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty. Add some delicious meals!</p>
      ) : (
        <table>
          <thead className="table-head">
            <tr className="head-list">
              <th>Items</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
            <tbody className="table-body">
          {cartItems.map((item) => (
            <tr key={item.id}>
            <td>
              <img src={item.image} alt={item.name} className="cart-image" />
            </td>
            <td>{item.name}</td>
            <td>{item.price} IDR</td>
            <td>
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                className="quantity-input"
              />
            </td>
            <td>
              <strong>{item.price * item.quantity} IDR</strong>
            </td>
            <td>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                <img src={assets.trash} alt="Remove" className="trash-icon" />
              </button>
            </td>
          </tr>
          ))}
        </tbody>
        </table>
      )}

      <div className="cart-totals">
        <h2 className="heading-cart">Cart Totals</h2>
        <div className="cart-row">
          <span>Subtotal</span>
          <span>{subtotal} IDR</span>
        </div>
        <div className="cart-row">
          <span>Delivery Fees</span>
          <span>{deliveryFee} IDR</span>
        </div>
        <div className="cart-row">
          <strong>Total</strong>
          <strong>{total} IDR</strong>
        </div>
      </div>

      <button className="checkout-btn" onClick={(e) => e.preventDefault()}>Checkout Now</button>
    </div>
  );
};

export default Cart;
