import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'

const ContactsView = () => {
  return (
    <>
      <section className='header-transparent'>
        <MainMenuSection />
      </section>
      <Breadcrumb location="Contacts" />
      <FooterSection />
    </>
  )
}

export default ContactsView