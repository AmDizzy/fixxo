import React from 'react'
import ProductCard from '../components/ProductCard'
import { NavLink } from 'react-router-dom'

const SpecialDealSection = ({items = []}) => {
  return (
    <div>
        <section className="special-deal container">
            <div className="special-deal-1">
                <div className="flash-sale">
                    <h1>2 FOR USD $29</h1>
                    <NavLink className="btn-card btn-white">
                        <div className="btn-box-left"></div>
                        FLASH SALE
                        <div className="btn-box-right"></div>
                    </NavLink>
                </div>
                <div className="row">
                    {
                    items.map(product => <ProductCard key={product.articleNumber} product={product} />)
                    }
                </div>
            </div>
            
            {/* <div className="special-deal-2">
                <div className="flash-sale">
                    <h1>2 FOR USD $49</h1>
                    <NavLink className="btn-card btn-white">
                        <div className="btn-box-left"></div>
                        FLASH SALE
                        <div className="btn-box-right"></div>
                    </NavLink>
                </div>
                <div className="row">
                    {
                        items.map(product => <ProductCard key={product.articleNumber} product={product} />)
                    }
                </div>
            </div> */}
        </section>
    </div>
  )
}

export default SpecialDealSection