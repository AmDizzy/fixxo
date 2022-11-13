import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductDetailsSection = ({product}) => {
    return (
        <section className="product-details container">
            <div className="product-images">
                <img className="big-image" src={product.imageName} />
                <div className="small-images">
                    <img src={product.imageName} />
                    <img src={product.imageName} />
                    <img src={product.imageName} />
                </div>
            </div>
            <div className="product-options">
                <h1>{product.name}</h1>
                <p>SKU: Placeholder</p>
                <p>BRAND: Placeholder</p>
                <div id='productRating' className="product-rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                </div>
                <div className="product-price">${product.price}</div>
                <div className="product-description">{product.description}Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly.(<NavLink className="product-description-link">read more</NavLink>)</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="product-information">
                <div>Description</div>
                <div>Additional</div>
                <div>Shopping & Returns </div>
                <div>Reviews</div>
            </div>
        </section>
    )
  }

export default ProductDetailsSection