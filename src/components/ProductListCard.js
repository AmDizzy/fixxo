import React from 'react'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import { currencyFormatter } from '../utilities/CurrencyFormatter'

const ProductListCard = ({product}) => {
    const { incrementQuantity } = useShoppingCart()
    
  return (
    <div className="__col">
        <div className="__card">
            <div className="__card-top">
                <NavLink to={`/products/${product.articleNumber}`} className="btn-card btn-theme">
                    <div className="btn-box-left"></div>
                    QUICK VIEW
                    <div className="btn-box-right"></div>
                </NavLink>
                <ul className="card-menu">
                    <button><i className="fa-regular fa-heart"></i></button>
                    <button><i className="fa-regular fa-code-compare"></i></button>
                    <button onClick={() => incrementQuantity({articleNumber: product.articleNumber, product: product})}><i className="fa-regular fa-bag-shopping"></i></button>
                </ul>
                <img src={product.imageName} alt={product.name} />
            </div>
            <div className="__card-body">
                <h5>{product.category}</h5>
                <h3>{product.name}</h3>
                <div id='productRating' className="product-rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                </div>
                <div className="card-price">
                    <span className="card-discount-price">{currencyFormatter(product.price)}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductListCard