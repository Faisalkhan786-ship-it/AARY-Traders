import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <span className="logo-text">AARY Traders</span>
        </Link>
        <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={isMenuOpen ? 'hamburger-line open' : 'hamburger-line'}></span>
          <span className={isMenuOpen ? 'hamburger-line open' : 'hamburger-line'}></span>
          <span className={isMenuOpen ? 'hamburger-line open' : 'hamburger-line'}></span>
        </button>
        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/products" className="nav-link" onClick={closeMenu}>
            Products
          </Link>
          <Link to="/about" className="nav-link" onClick={closeMenu}>
            About
          </Link>
          <Link to="/contact" className="nav-link" onClick={closeMenu}>
            Contact
          </Link>
          <Link to="/cart" className="nav-link cart-link" onClick={closeMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar