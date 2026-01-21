import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import Products from './components/pages/Products'
import ProductDetail from './components/pages/ProductDetail'
import Cart from './components/pages/Cart'
import About from './components/pages/About'
import Contact from './components/pages/Contact'

function App() {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product, size = '32', color = null) => {
    const existingItem = cartItems.find(
      item => item.id === product.id && item.size === size && item.color === (color || product.colors[0])
    )

    if (existingItem) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id && item.size === size && item.color === (color || product.colors[0])
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          size,
          color: color || product.colors[0],
          quantity: 1
        }
      ])
    }
  }

  const removeFromCart = (itemId, size, color) => {
    setCartItems(cartItems.filter(item => !(item.id === itemId && item.size === size && item.color === color)))
  }

  const updateQuantity = (itemId, size, color, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId, size, color)
      return
    }
    setCartItems(
      cartItems.map(item =>
        item.id === itemId && item.size === size && item.color === color
          ? { ...item, quantity }
          : item
      )
    )
  }

  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  return (
    <Router>
      <div className="App">
        <Navbar cartCount={getCartCount()} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
                totalPrice={getTotalPrice()}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App