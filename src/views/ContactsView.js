import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import ContactFormSection from '../sections/ContactFormSection'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import MapSection from '../sections/MapSection'

const ContactsView = () => {
  window.top.document.title = 'Contacts | Fixxo.'


  return (
    <>
      <section className='header-transparent'>
        <MainMenuSection />
      </section>
      <Breadcrumb location="Contacts" />
      <MapSection />
      <ContactFormSection />
      <FooterSection />
    </>
  )
}

export default ContactsView