import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to AARY Traders</h1>
          <p className="hero-subtitle">Premium Quality Slippers for Every Style</p>
          <p className="hero-description">
            Discover our collection of premium handcrafted slippers. From everyday comfort to trendy designs, we have the perfect pair for every step.
          </p>
          <Link to="/products" className="cta-button">
            Shop Now
          </Link>
        </div>
        <div className="hero-image">
          <img
            src="https://imagedelivery.net/nq9qT5FHZv9Sg48UUnD1-A/f683969c-bdde-4ba9-ac81-9262febd8300/public"
            alt="Premium Jeans"
            onError={(e) => {
              e.target.src = 'https://placehold.co/800x1000/CCCCCC/666666?text=FKDenim'
            }}
          />
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <div className="feature-icon">✈️</div>
          <h3>Free Shipping</h3>
          <p>On orders above ₹2999</p>
        </div>
        {/* <div className="feature">
          <div className="feature-icon">↩️</div>
          <h3>Easy Returns</h3>
          <p>30-day return policy</p>
        </div> */}
        <div className="feature">
          <div className="feature-icon">✓</div>
          <h3>Quality Guarantee</h3>
          <p>Premium materials only</p>
        </div>
        <div className="feature">
          <div className="feature-icon">💳</div>
          <h3>Secure Payment</h3>
          <p>100% secure checkout</p>
        </div>
      </section>

      <section className="featured-products">
        <h2 className="section-title">Featured Collection</h2>
        <p className="section-subtitle">Discover our most popular styles</p>
        <div className="featured-grid">
          <div className="featured-item">
            <img
              src="https://imagedelivery.net/nq9qT5FHZv9Sg48UUnD1-A/f683969c-bdde-4ba9-ac81-9262febd8300/public"
              alt="Classic Blue"
              onError={(e) => {
                e.target.src = 'https://placehold.co/400x500/CCCCCC/666666?text=Classic'
              }}
            />
            <div className="featured-overlay">
              <h3>Classic Collection</h3>
              <Link to="/products" className="featured-link">
                View Collection
              </Link>
            </div>
          </div>
          <div className="featured-item">
            <img
              src="https://imagedelivery.net/nq9qT5FHZv9Sg48UUnD1-A/8d56c8e8-3110-4897-5612-84f453e16900/public"
              alt="Slim Fit"
              onError={(e) => {
                e.target.src = 'https://placehold.co/400x500/CCCCCC/666666?text=Slim+Fit'
              }}
            />
            <div className="featured-overlay">
              <h3>Slim Fit Collection</h3>
              <Link to="/products" className="featured-link">
                View Collection
              </Link>
            </div>
          </div>
          <div className="featured-item">
            <img
              src="https://imagedelivery.net/nq9qT5FHZv9Sg48UUnD1-A/621e7625-fdbc-44b2-59c4-a9f19b4d0b00/public"
              alt="Trendy Styles"
              onError={(e) => {
                e.target.src = 'https://placehold.co/400x500/CCCCCC/666666?text=Trendy'
              }}
            />
            <div className="featured-overlay">
              <h3>Trendy Styles</h3>
              <Link to="/products" className="featured-link">
                View Collection
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home