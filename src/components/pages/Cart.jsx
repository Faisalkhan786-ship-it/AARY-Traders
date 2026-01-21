import { Link } from 'react-router-dom'
import './Cart.css'

const Cart = ({ cartItems, removeFromCart, updateQuantity, totalPrice }) => {
  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="empty-cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="empty-cart-icon"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <h2>Your cart is empty</h2>
          <p>Start shopping to add items to your cart</p>
          <Link to="/products" className="shop-now-btn">
            Shop Now
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <p>{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart</p>
      </div>

      <div className="cart-container">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={`${item.id}-${item.size}-${item.color}`} className="cart-item">
              <Link to={`/product/${item.id}`} className="cart-item-image">
                <img 
                  src={item.image} 
                  alt={item.name}
                  onError={(e) => {
                    e.target.src = `https://placehold.co/120x150/CCCCCC/666666?text=${encodeURIComponent(item.name)}`
                  }}
                />
              </Link>
              <div className="cart-item-details">
                <Link to={`/product/${item.id}`} className="cart-item-name">
                  {item.name}
                </Link>
                <div className="cart-item-info">
                  <span>Size: {item.size}</span>
                  <span>Color: {item.color}</span>
                </div>
                <div className="cart-item-price">₹{item.price.toLocaleString()}</div>
              </div>
              <div className="cart-item-quantity">
                <button
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                >
                  −
                </button>
                <span className="quantity-value">{item.quantity}</span>
                <button
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <div className="cart-item-total">
                ₹{(item.price * item.quantity).toLocaleString()}
              </div>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id, item.size, item.color)}
                aria-label="Remove item"
              >
                ×
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{totalPrice.toLocaleString()}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>{totalPrice >= 2999 ? 'Free' : '₹199'}</span>
          </div>
          {totalPrice < 2999 && (
            <div className="free-shipping-note">
              Add ₹{(2999 - totalPrice).toLocaleString()} more for free shipping!
            </div>
          )}
          <div className="summary-divider"></div>
          <div className="summary-row total">
            <span>Total</span>
            <span>₹{(totalPrice + (totalPrice >= 2999 ? 0 : 199)).toLocaleString()}</span>
          </div>
          <button className="checkout-btn">Proceed to Checkout</button>
          <Link to="/products" className="continue-shopping">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart