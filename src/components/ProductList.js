import React from 'react'
import ProductListCard from './ProductListCard'

const ProductList = ({title, items = []}) => {
  return (
    <div className="product-list">
        <h1>{title}</h1>
        {
            Array.from(items).map(product => <ProductListCard key={product.articleNumber} product={product} />)
        }
    </div>
  )
}

export default ProductList