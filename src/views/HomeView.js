import React, { useContext } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import { ProductContext } from '../contexts/contexts'


const HomeView = () => {
  const productContext = useContext(ProductContext)
  window.top.document.title = 'Fixxo.'

  return (
    <>
      <section className='header'>
        <MainMenuSection />
      </section>
      <ProductGridSection title="Featured Products" items={productContext.featuredProducts} />
      <FooterSection />
    </>
  )
}

export default HomeView