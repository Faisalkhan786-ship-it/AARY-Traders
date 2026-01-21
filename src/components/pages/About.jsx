import './About.css'

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About AARY Traders</h1>
          <p className="hero-tagline">Premium Slippers, Exceptional Comfort, Timeless Style</p>
        </div>
      </section>

      <section className="about-content">
        <div className="about-container">
          <div className="about-section">
            <h2>Our Story</h2>
            <p>
              AARY TRADERS was born from a passion for premium comfort and reliable footwear. Since our inception, we have been dedicated to crafting high-quality slippers that combine comfort, durability, and modern style. Our mission is to provide you with the perfect pair of slippers that fits your lifestyle and supports you every step of the way.
            </p>
            <p>
             We believe that quality footwear should be accessible to everyone. That’s why we’ve curated a diverse collection that caters to all styles, sizes, and preferences. From everyday comfort wear to trendy designs, AARY TRADERS offers something for everyone who values comfort, quality, and style.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Commitment</h2>
            <div className="commitment-grid">
              <div className="commitment-item">
                <div className="commitment-icon">🎯</div>
                <h3>Quality First</h3>
                <p>We use only premium materials and superior craftsmanship in every pair of jeans we offer.</p>
              </div>
              <div className="commitment-item">
                <div className="commitment-icon">♻️</div>
                <h3>Sustainable Fashion</h3>
                <p>Committed to eco-friendly practices and sustainable manufacturing processes.</p>
              </div>
              <div className="commitment-item">
                <div className="commitment-icon">👥</div>
                <h3>Customer Satisfaction</h3>
                <p>Your happiness is our priority. We stand behind every product we sell.</p>
              </div>
              <div className="commitment-item">
                <div className="commitment-icon">🚀</div>
                <h3>Innovation</h3>
                <p>Constantly evolving our designs to stay ahead of fashion trends.</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Why Choose AARY Traders?</h2>
            <ul className="features-list">
              <li>✓ Premium Quality Materials - Made with the finest AARY  Traders</li>
              <li>✓ Wide Range of Styles - From classic to contemporary, we have it all</li>
              <li>✓ Perfect Fit Guarantee - Multiple sizes and fits for everyone</li>
              <li>✓ Affordable Pricing - Quality doesn't always mean expensive</li>
              <li>✓ Free Shipping - On orders above ₹2999</li>
              {/* <li>✓ Easy Returns - 30-day hassle-free return policy</li> */}
              <li>✓ Customer Support - 24/7 assistance for all your queries</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About