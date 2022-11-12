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

  useEffect(() => {
    getProduct(id)
  }, [])

    return (
        <>
          <section className='header-transparent'>
            <MainMenuSection />
          </section>
          <SelectionSaleSection />
          <Breadcrumb location="Product Signal" />
          <ProductDetailsSection item={product} />
          <FooterSection />
        </>
    )
}

export default ProductDetailsView