import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>AARY Traders</h3>
          <p>Discover our collection of premium handcrafted slippers. From everyday comfort to trendy designs, we have the perfect pair for every step.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Twitter">Twitter</a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Shipping Info</a></li>
            {/* <li><a href="#">Returns</a></li> */}
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            {/* <li>Email: support@fkdenim.com</li> */}
            <li>Phone: +91 7017266901</li>
            <li>Address: milak road bhainsori,  tehseel milak distt-Rampur (UP) -243701</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 FKDenim. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer