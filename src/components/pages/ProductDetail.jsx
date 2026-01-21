import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import jeansData from './data/jeansData'
import './ProductDetail.css'

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = jeansData.find((p) => p.id === parseInt(id))
  const [selectedSize, setSelectedSize] = useState(product?.sizes[2] || '32')
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '')

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <Link to="/products">Back to Products</Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor)
    navigate('/cart')
  }

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  return (
    <div className="product-detail-page">
      <Link to="/products" className="back-link">
        ← Back to Products
      </Link>
      <div className="product-detail-container">
        <div className="product-image-section">
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-main-image"
            onError={(e) => {
              e.target.src = `https://placehold.co/800x1000/CCCCCC/666666?text=${encodeURIComponent(product.name)}`
            }}
          />
          {product.originalPrice > product.price && (
            <span className="detail-discount-badge">{discount}% OFF</span>
          )}
        </div>
        <div className="product-detail-info">
          <h1 className="product-detail-name">{product.name}</h1>
          <div className="product-detail-rating">
            <span className="detail-stars">{'★'.repeat(Math.floor(product.rating))}</span>
            <span className="rating-value">{product.rating}</span>
            <span className="review-count">({product.reviews} reviews)</span>
          </div>
          <div className="product-detail-price">
            <span className="detail-current-price">₹{product.price.toLocaleString()}</span>
            {product.originalPrice > product.price && (
              <>
                <span className="detail-original-price">₹{product.originalPrice.toLocaleString()}</span>
                <span className="savings">You save ₹{(product.originalPrice - product.price).toLocaleString()}</span>
              </>
            )}
          </div>
          <p className="product-description">{product.description}</p>

          <div className="product-options">
            <div className="size-selection">
              <h3>Select Size</h3>
              <div className="size-buttons">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="color-selection">
              <h3>Select Color</h3>
              <div className="color-buttons">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`color-btn ${selectedColor === color ? 'active' : ''}`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="product-detail-actions">
            <button className="add-to-cart-detail-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="buy-now-btn" onClick={handleAddToCart}>
              Buy Now
            </button>
          </div>

          <div className="product-features">
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Premium Quality Material</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Free Shipping on orders above ₹2999</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>30-Day Return Policy</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Easy Exchange Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail