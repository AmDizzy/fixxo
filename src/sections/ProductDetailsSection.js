import React from 'react'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import ProductCard from '../components/ProductCard'

const ProductDetailsSection = ({product, related, item}) => {
    const { incrementQuantity, decrementQuantity } = useShoppingCart()

    return (
        <section className="product-details container">
            <div className='top-section'>
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
                        <div className="btn-group btn-group-md item-info-quantity" role="group" aria-label="Small button group">
                            <button type="button" className="btn btn-outline-dark" onClick={() => decrementQuantity(item)}>-</button>
                            <button disabled type="button" className="btn btn-outline-dark quantity">1</button>
                            <button type="button" className="btn btn-outline-dark" onClick={() => incrementQuantity(item)}>+</button>
                        </div>
                        <button onClick={() => incrementQuantity({articleNumber: product.articleNumber, product: product})} className="btn-card btn-theme">
                            <div className="btn-box-left"></div>
                            Add to cart
                            <div className="btn-box-right"></div>
                        </button>
                    </div>
                    <div className='settings product-share'>
                        <h1>Share:</h1>
                        <a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://www.twitter.com/" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                        <a href="https://www.google.com/" target="_blank"><i className="fa-brands fa-google"></i></a>
                        <a href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
                
                <div className="product-information">
                    <div className='product-information-headers'>
                        <div>Description</div>
                        <div>Additional</div>
                        <div>Shopping & Returns </div>
                        <div>Reviews</div>
                    </div>
                    <hr></hr>
                    <div className='product-information-info'>
                        <p>Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard.</p>
                        <ul>
                            <li>Village did removed enjoyed explain nor ham saw calling talking.</li>
                            <li>Securing as informed declared or margaret.</li>
                            <li>Joy horrible moreover man feelings own shy.</li>
                        </ul>
                        <p>On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.</p>
                    </div>
                </div>
            </div>

            <div className='related-products'>
                <h1>Related Products</h1>
                <div>
                    <div className="row">
                        {
                        Array.from(related).map(product => <ProductCard key={product.articleNumber} product={product} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
  }

export default ProductDetailsSection