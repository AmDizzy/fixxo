import React from 'react'
import ProductCard from '../components/ProductCard'

const ProductGridSection = ({title, items = []}) => {
  return (
    <section className="featured-products container">
        <h1>{title}</h1>
        <div className="row">
          {
            Array.from(items).map(product => <ProductCard key={product.articleNumber} product={product} />)
          }
        </div>
      </section>
  )
}

export default ProductGridSection