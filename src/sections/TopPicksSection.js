import React from 'react'
import { NavLink } from 'react-router-dom'
import pamela_reif_top_picks from '../assets/images/pamela-reif-top-picks.svg'
import lets_be_conscious from '../assets/images/lets-be-conscious.svg'

const TopPicksSection = () => {
  return (
    <div>
        <section className="top-picks container">
            <div className="box-left">
                <img src={pamela_reif_top_picks} alt="" />
                <div>
                    <h1>Pamela Reif's Top Picks</h1>
                    <NavLink className="btn-card btn-theme-dark">
                        <div className="btn-box-left"></div>
                        SHOP NOW
                        <div className="btn-box-right"></div>
                    </NavLink>
                </div>
            </div>
            <div className="box-right">
                <div>
                    <h1>Let's Be Conscious</h1>
                    <NavLink className="btn-card btn-white">
                        <div className="btn-box-left"></div>
                        FLASH SALE
                        <div className="btn-box-right"></div>
                    </NavLink>
                </div>
                <img src={lets_be_conscious} alt="" />
            </div>
        </section>
    </div>
  )
}

export default TopPicksSection