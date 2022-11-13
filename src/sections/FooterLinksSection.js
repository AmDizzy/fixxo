import React from 'react'
import { NavLink } from 'react-router-dom'
import customer_service_icon from '../assets/images/icons/customer-service-icon.svg'
import credit_card_icon from '../assets/images/icons/credit-card-icon.svg'
import delivery_truck_icon from '../assets/images/icons/delivery-truck-icon.svg'

const FooterLinksSection = () => {
  return (
    <div>
        <section className="footer-links container">
            <div className="customer-support">
                <NavLink className="footer-icon"><img src={customer_service_icon} alt="" /></NavLink>
                <h1>Customer Support</h1>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            <div className="customer-support">
                <NavLink className="footer-icon"><img src={credit_card_icon} alt="" /></NavLink>
                <h1>Secured Payment</h1>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            <div className="customer-support">
                <NavLink className="footer-icon"><img src={delivery_truck_icon} alt="" /></NavLink>
                <h1>Free Home Delivery</h1>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            <div className="customer-support">
                <NavLink className="footer-icon"><img src={delivery_truck_icon} alt="" /></NavLink>
                <h1>30 Day Reuters</h1>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
        </section>
    </div>
  )
}

export default FooterLinksSection