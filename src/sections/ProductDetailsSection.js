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
                <div className="d-flex" style={{gap: "1rem"}}>
                    <span>SKU: Placeholder</span>
                    <span>BRAND: Placeholder</span>
                </div>

                <div className="product-rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                </div>

                <div className="product-price">${product.price}.00</div>

                <div className="product-description">{product.description}Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly.
                    (<NavLink className="product-description-link">read more</NavLink>)
                </div>

                <div className='settings product-size'>
                    <h1>Size:</h1>
                    <input type="radio" className="btn-check" name="options" id="size-s" autoComplete="off" />
                    <label className="btn btn-secondary" htmlFor="size-s">S</label>
                    <input type="radio" className="btn-check" name="options" id="size-m" autoComplete="off" />
                    <label className="btn btn-secondary" htmlFor="size-m">M</label>
                    <input type="radio" className="btn-check" name="options" id="size-l" autoComplete="off" />
                    <label className="btn btn-secondary" htmlFor="size-l">L</label>
                    <input type="radio" className="btn-check" name="options" id="size-xl" autoComplete="off" />
                    <label className="btn btn-secondary" htmlFor="size-xl">XL</label>
                </div>

                <div className='settings product-color'>
                    <h1>Color:</h1>
                    <select className="form-select">
                        <option value="1">Red</option>
                        <option value="2">Blue</option>
                        <option value="3">Orange</option>
                    </select>
                </div>

                <div className='settings product-quantity'>
                    <h1>Qty:</h1>
                
                </div>
                <div className='settings product-share'>
                    <h1>Share:</h1>

                </div>
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