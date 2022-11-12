import React, { useContext } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import { ProductContext } from '../contexts/contexts'
import ShowcaseSection from '../sections/ShowcaseSection'
import NewArrivalsSection from '../sections/NewArrivalsSection'
import TopPicksSection from '../sections/TopPicksSection'
import OurSpecialitySection from '../sections/OurSpecialitySection'
import SpecialDealSection from '../sections/SpecialDealSection'


const HomeView = () => {
  const productContext = useContext(ProductContext)
  window.top.document.title = 'Fixxo.'

  return (
    <>
      <section className='header'>
        <MainMenuSection />
      </section>
      <ShowcaseSection />
      <NewArrivalsSection />
      <ProductGridSection title="Featured Products" items={productContext.featuredProducts} />
      <TopPicksSection />
      <OurSpecialitySection />
      <SpecialDealSection />
      <FooterSection />
    </>
  )
}

export default HomeView