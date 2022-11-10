import React, { useContext } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import { ProductContext } from '../contexts/contexts'
import SelectionSaleSection from '../sections/SelectionSaleSection'
import ProductDetailsSection from '../sections/ProductDetailsSection'

const ProductDetailsView = () => {
  const productContext = useContext(ProductContext)

  window.top.document.title = 'Products | Fixxo.'

    return (
        <>
          <section className='header-transparent'>
            <MainMenuSection />
          </section>
          <SelectionSaleSection />
          <Breadcrumb location="Product Signal" />
          <ProductDetailsSection  />
          <FooterSection />
        </>
    )
}

export default ProductDetailsView