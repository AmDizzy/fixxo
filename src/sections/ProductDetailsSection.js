import React from 'react'

const ProductDetailsSection = ({item}) => {
    return (
        <section className="featured-products container">
            <div>
                <div>{item.name}</div>
                <img src={item.imageName} />
            </div>
        </section>
    )
  }

export default ProductDetailsSection