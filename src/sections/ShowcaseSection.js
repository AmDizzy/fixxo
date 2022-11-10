import React from 'react'
import { NavLink } from 'react-router-dom'
import showcase_image_1 from '../assets/images/showcase-image-1.svg';
import showcase_image_2 from '../assets/images/showcase-image-2.svg';

const ShowcaseSection = () => {
  return (
    <div>
        <section className="showcase">
            <div className="container">
                <div className="showcase-body">
                    <img src={showcase_image_1} alt="" />
                    <div>
                        <h1>SALE UP</h1>
                        <h1>To 50% Off</h1>
                        <p>Online shopping free home delivery over $100</p>
                        <NavLink className="btn-card btn-theme">
                            <div className="btn-box-left"></div>
                            SHOP NOW
                            <div className="btn-box-right"></div>
                        </NavLink>
                    </div>
                    <img src={showcase_image_2} alt="" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default ShowcaseSection