// import { Link } from 'react-router-dom'
// import jeansData from './data/jeansData'
// import './Products.css'

// const Products = ({ addToCart }) => {
//   return (
//     <div className="products-page">
//       <div className="products-header">
//         <h1>Our Jeans Collection</h1>
//         <p>Discover premium quality denim for every style</p>
//       </div>
//       <div className="products-grid">
//         {jeansData.map((product) => (
//           <div key={product.id} className="product-card">
//             <Link to={`/product/${product.id}`} className="product-link">
//               <div className="product-image-container">
//                 <img 
//                   src={product.image} 
//                   alt={product.name} 
//                   className="product-image"
//                   onError={(e) => {
//                     e.target.src = `https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop`
//                   }}
//                   loading="lazy"
//                 />
//                 {product.originalPrice > product.price && (
//                   <span className="discount-badge">
//                     {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
//                   </span>
//                 )}
//               </div>
//               <div className="product-info">
//                 <h3 className="product-name">{product.name}</h3>
//                 <div className="product-rating">
//                   <span className="stars">{'★'.repeat(Math.floor(product.rating))}</span>
//                   <span className="rating-text">({product.reviews})</span>
//                 </div>
//                 <div className="product-price">
//                   <span className="current-price">₹{product.price.toLocaleString()}</span>
//                   {product.originalPrice > product.price && (
//                     <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
//                   )}
//                 </div>
//               </div>
//             </Link>
//             <button
//               className="add-to-cart-btn"
//               onClick={(e) => {
//                 e.preventDefault()
//                 e.stopPropagation()
//                 addToCart(product)
//               }}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Products

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import jeansData from './data/jeansData'
import './Products.css'

const Products = ({ addToCart }) => {
  const navigate = useNavigate()
  
  // store IDs of products added to cart
  const [addedProducts, setAddedProducts] = useState([])

  const handleAddToCart = (product) => {
    addToCart(product)
    // add product id to addedProducts array
    setAddedProducts((prev) => [...prev, product.id])
  }

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Our Jeans Collection</h1>
        <p>Discover premium quality denim for every style</p>
      </div>

      <div className="products-grid">
        {jeansData.map((product) => {
          const isAdded = addedProducts.includes(product.id)

          return (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`} className="product-link">
                <div className="product-image-container">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="product-image"
                    onError={(e) => {
                      e.target.src = `https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop`
                    }}
                    loading="lazy"
                  />
                  {product.originalPrice > product.price && (
                    <span className="discount-badge">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  )}
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-rating">
                    <span className="stars">{'★'.repeat(Math.floor(product.rating))}</span>
                    <span className="rating-text">({product.reviews})</span>
                  </div>
                  <div className="product-price">
                    <span className="current-price">₹{product.price.toLocaleString()}</span>
                    {product.originalPrice > product.price && (
                      <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
                    )}
                  </div>
                </div>
              </Link>

              {/* Add to Cart / Go to Cart button */}
              {!isAdded ? (
                <button
                  className="add-to-cart-btn"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    handleAddToCart(product)
                  }}
                >
                  Add to Cart
                </button>
              ) : (
                <button
                  className="go-to-cart-btn"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    navigate('/cart')
                  }}
                >
                  Go to Cart
                </button>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Products
