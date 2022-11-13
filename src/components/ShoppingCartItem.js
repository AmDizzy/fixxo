import React from 'react'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import { currencyFormatter } from '../utilities/CurrencyFormatter'

const ShoppingCartItem = ({item}) => {
    const { incrementQuantity, decrementQuantity, removeItem } = useShoppingCart()

  return (
    <div className='shoppingcart-item'>
        <div className='item-image'>
            <img src={item.product.imageName} alt={item.product.name} />
        </div>
        <div className='item-info'>
            <div className='item-info-name'>{item.product.name}</div>
            <div className="btn-group btn-group-sm item-info-quantity" role="group" aria-label="Small button group">
                <button type="button" className="btn btn-outline-dark" onClick={() => decrementQuantity(item)}>-</button>
                <button disabled type="button" className="btn btn-outline-dark quantity">{item.quantity}</button>
                <button type="button" className="btn btn-outline-dark" onClick={() => incrementQuantity(item)}>+</button>
            </div>
        </div>
        <div className='item-price'>
            <div>{currencyFormatter(item.product.price * item.quantity)}</div>
            <button onClick={() => removeItem(item.articleNumber)}><i className='fa-solid fa-trash'></i></button>
        </div>
    </div>
  )
}

export default ShoppingCartItem