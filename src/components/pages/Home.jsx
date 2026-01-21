import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to AARY Traders</h1>
          <p className="hero-subtitle">Premium Quality Jeans for Every Style</p>
          <p className="hero-description">
            Discover our collection of handcrafted denim jeans. From classic fits to trendy styles,
            we have something for everyone.
          </p>
          <Link to="/products" className="cta-button">
            Shop Now
          </Link>
        </div>
        <div className="hero-image">
          <img
            src="https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop"
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
        <div className="feature">
          <div className="feature-icon">↩️</div>
          <h3>Easy Returns</h3>
          <p>30-day return policy</p>
        </div>
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
              src="https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop"
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
              src="https://hips.hearstapps.com/hmg-prod/images/mhl-jeans-levis-044-68c88b01918b8.jpg?crop=1xw%3A1xh%3Bcenter%2Ctop&resize=1120%3A%2A"
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
              src="https://images.jdmagicbox.com/quickquotes/images_main/men-denim-straight-jeans-blue-28-to-36-2227138853-aqgwwa7n.jpg"
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