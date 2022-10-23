import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductCard = ({product}) => {

    const addToWishList = (e) => {
        console.log(`Product with ID ${product.id} added to wish list`)
    }

    const addToCompare = (e) => {
        console.log(`Product with ID ${product.id} added to compare`)
    }

    const addToCart = (e) => {
        console.log(`Product with ID ${product.id} added to shopping cart`)
    }

  return (
    <div className="col">
        <div className="card">
            <div className="card-top">
                <NavLink to={`/products/${product.name.toLowerCase().replace(/ /gi, "-")}`} className="btn-card btn-theme">
                    <div className="btn-box-left"></div>
                    QUICK VIEW
                    <div className="btn-box-right"></div>
                </NavLink>
                <ul className="card-menu">
                    <button onClick={addToWishList}><i className="fa-regular fa-heart"></i></button>
                    <button onClick={addToCompare}><i className="fa-regular fa-code-compare"></i></button>
                    <button onClick={addToCart}><i className="fa-regular fa-bag-shopping"></i></button>
                </ul>
                <img src={product.img} alt={product.name} />
            </div>
            <div className="card-body">
                <h5>{product.category}</h5>
                <h3>{product.name}</h3>
                <div className="product-rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                </div>
                <div className="card-price">
                    <span className="card-static-price d-none">$29.00</span>
                    <span className="card-old-price">$400.00</span>
                    <span className="card-discount-price">{product.price}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard