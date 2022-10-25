import React, { useState } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'

const HomeView = () => {
  window.top.document.title = 'Fixxo.'

  const [products, setProducts] = useState ([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "35.00", rating: 5, img: "https://images.pexels.com/photos/14093415/pexels-photo-14093415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "35.00", rating: 5, img: "https://images.pexels.com/photos/6758039/pexels-photo-6758039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "35.00", rating: 5, img: "https://images.pexels.com/photos/14066919/pexels-photo-14066919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 4, name: "Modern Black Blouse", category: "Fashion", price: "35.00", rating: 5, img: "https://images.pexels.com/photos/4012254/pexels-photo-4012254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  ])

  return (
    <>
      <section className='header'>
        <MainMenuSection />
      </section>
      <ProductGridSection title="Featured Products" products={products}/>
      <FooterSection />
    </>
  )
}

export default HomeView