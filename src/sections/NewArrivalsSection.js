import React from 'react'
import { NavLink } from 'react-router-dom'
import showcase_winter_clearance from '../assets/images/showcase-winter-clearance.svg';
import showcase_new_arrivals from '../assets/images/showcase-new-arrivals.svg';

const NewArrivalsSection = () => {
  return (
    <div>
        <section className="new-arrivals container">
            <div className="clearance">
                <div>
                    <h1>Winter Clearance Up to 70% Off!</h1>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apriam eaque ipsa quae ab illo inventore.</p>
                    <NavLink className="btn-card btn-theme-dark">
                        <div className="btn-box-left"></div>
                        SHOP NOW
                        <div className="btn-box-right"></div>
                    </NavLink>
                </div>
                <img src={showcase_winter_clearance} alt="" />
            </div>
            <div className="arrivals-window">
                <div>
                    <h1>New Arrivals</h1>
                    <NavLink className="btn-card btn-theme-dark">
                        <div className="btn-box-left"></div>
                        SHOP NOW
                        <div className="btn-box-right"></div>
                    </NavLink>
                </div>
                <img src={showcase_new_arrivals} alt="" />
            </div>
        </section>
    </div>
  )
}

export default NewArrivalsSection