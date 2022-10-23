import React from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'

const ProductDetailsView = () => {

    const params = useParams()

    return (
        <>
          <section className='header-transparent'>
            <MainMenuSection />
          </section>
          <Breadcrumb location="Product Signal" />
          <FooterSection />
        </>
    )
}

export default ProductDetailsView