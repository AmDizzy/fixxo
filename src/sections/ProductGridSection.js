import React from 'react'
import ProductCard from '../components/ProductCard'

const ProductGridSection = ({title, products}) => {



  return (
    <section className="featured-products container">
        <h1>{title}</h1>
          <div className="row">
            {
              products.map(product => <ProductCard key={product.id} product={product} />)
            }
          </div>
      </section>
  )
}

export default ProductGridSection