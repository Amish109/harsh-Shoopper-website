import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Shopper is a versatile e-commerce platform designed to simplify online shopping. Offering a seamless experience, it features a wide range of products, from fashion to daily essentials, all at competitive prices. With secure payments, fast delivery, and user-friendly navigation, Shopper is your one-stop destination for convenient and reliable online shopping.</p>
        <p>Shopper is an e-commerce platform offering diverse products with detailed descriptions, reviews, and ratings. Enjoy secure payments, fast delivery, and an effortless shopping experience.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
