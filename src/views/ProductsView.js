import React, { useEffect } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import SelectionSaleSection from '../sections/SelectionSaleSection'
import { useProductContext } from '../contexts/ProductContext'


const ProductDetailsView = () => {
  window.top.document.title = 'Products | Fixxo.'
  const {products, getProducts} = useProductContext()

  // Gets all the products from the API and sends them into ProductGridSection
  useEffect(() => {
    getProducts()
  }, [])

    return (
        <>
          <section className='header-transparent'>
            <MainMenuSection />
          </section>
          <SelectionSaleSection />
          <Breadcrumb location="Product Signal" />
          <ProductGridSection title="Products" items={products} />
          <FooterSection />
        </>
    )
}

export default ProductDetailsView