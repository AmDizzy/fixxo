import React from 'react'
import ProductList from '../components/ProductList'

const ProductLists = ({items}) => {

  return (
    <section className="product-lists container">
        <ProductList title="Latest Product" items={items} />
        <ProductList title="Best Selling Product" items={items} />
        <ProductList title="Top Reacted Product" items={items} />
    </section>
  )
}

export default ProductLists