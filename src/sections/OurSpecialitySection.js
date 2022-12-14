import React from 'react'
import { NavLink } from 'react-router-dom'

const OurSpecialitySection = () => {
  return (
    <div>
        <section className="our-speciality container">
            <div>
                <h1>Our Speciality</h1>
                <div>
                    <div className="box-track-order">
                        <div className="box-left">
                            <h1>Track your order</h1>
                            <NavLink>Get started {`>`}</NavLink>
                        </div>
                        <div className="box-right"></div>
                    </div>
                    <div className="box-make-return">
                        <div className="box-left">
                            <h1>Make a Return</h1>
                            <NavLink>Get started {`>`}</NavLink>
                        </div>
                        <div className="box-right"></div>
                    </div>
                    <div className="box-price-adjustment">
                        <div className="box-left">
                            <h1>Request a Price Adjustment</h1>
                            <NavLink>Get started {`>`}</NavLink>
                        </div>
                        <div className="box-right"></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default OurSpecialitySection