import React from 'react'
import { NavLink } from 'react-router-dom'

const SaleBanner = () => {
  return (
    <div>
        <section className="sale-banner container">
            <div>
                <h1>Up to 70% off*</h1>
                <p>Women's, Men's & Kids' Winter Fashion</p>
                <NavLink className="btn-card btn-white">
                    <div className="btn-box-left"></div>
                    FLASH SALE
                    <div className="btn-box-right"></div>
                </NavLink>
            </div>
        </section>
    </div>
  )
}

export default SaleBanner