import React, { useContext } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import { ProductContext } from '../contexts/contexts'
import SelectionSaleSection from '../sections/SelectionSaleSection'

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
          <ProductGridSection title="Products" items={productContext.allProducts} />
          <FooterSection />
        </>
    )
}

export default ProductDetailsView