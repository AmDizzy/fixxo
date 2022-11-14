import React, { useEffect } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import NewArrivalsSection from '../sections/NewArrivalsSection'
import TopPicksSection from '../sections/TopPicksSection'
import OurSpecialitySection from '../sections/OurSpecialitySection'
import SpecialDealSection from '../sections/SpecialDealSection'
import { useProductContext } from '../contexts/ProductContext'
import SaleBanner from '../sections/SaleBanner'
import LineHrSection from '../sections/LineHrSection'
import FooterLinksSection from '../sections/FooterLinksSection'
import ProductLists from '../sections/ProductLists'


const HomeView = () => {
  window.top.document.title = 'Fixxo.'
  const {featuredProducts, getFeaturedProducts} = useProductContext()
  const {specialDeal, getSpecialDeal} = useProductContext()
  const {productLists, getProductLists} = useProductContext()


  //Gets 8 products and sends them to the product grid section
  useEffect(() => {
    getFeaturedProducts(8)
  }, [])

  //Gets 6 products and sends them to the special deal sections
  useEffect(() => {
    getSpecialDeal(6)
  }, [])

  //Gets 3 products and sends them to the product lists
  useEffect(() => {
    getProductLists(3)
  }, [])

  return (
    <>
      <section className='header'>
        <MainMenuSection />
      </section>
      <ShowcaseSection />
      <NewArrivalsSection />
      <ProductGridSection title="Featured Products" items={featuredProducts} />
      <TopPicksSection />
      <OurSpecialitySection />
      <SpecialDealSection items={specialDeal} />
      <SaleBanner />
      <ProductLists items={productLists} />
      <LineHrSection />
      <FooterLinksSection />
      <FooterSection />
    </>
  )
}

export default HomeView