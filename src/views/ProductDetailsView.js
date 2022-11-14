import React, { useEffect } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import SelectionSaleSection from '../sections/SelectionSaleSection'
import ProductDetailsSection from '../sections/ProductDetailsSection'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../contexts/ProductContext'


const ProductDetailsView = () => {
  window.top.document.title = 'Products | Fixxo.'
  const {id} = useParams()
  const {product, getProduct} = useProductContext()
  const {featuredProducts, getFeaturedProducts} = useProductContext()

  //Gets specific product from ID and sends them to the product detail section to see SKU, size, description etc
  useEffect(() => {
    getProduct(id)
  }, [])

  //Gets 4 products and sends them to the product detail section to display in related products
  useEffect(() => {
    getFeaturedProducts(4)
  }, [])

    return (
        <>
          <section className='header-transparent'>
            <MainMenuSection />
          </section>
          <SelectionSaleSection />
          <Breadcrumb location="Product Signal" />
          <ProductDetailsSection product={product} related={featuredProducts} />
          <FooterSection />
        </>
    )
}

export default ProductDetailsView