import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../components/MenuIcon'
import { useShoppingCart } from '../contexts/ShoppingCartContext'

const MainMenuSection = () => {
  const [showMenu, setShowMenu] = useState(false)
  const { cartQuantity } = useShoppingCart()

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }


  return (
    <nav className="mainmenu container">
        <NavLink className="logotype" to="/">Fixxo.</NavLink>
        <div className={`menu-links ${ showMenu ? "d-grid": "" }`}>
          <NavLink className="menu-link" to="/" end>Home</NavLink>
          <NavLink className="menu-link" to="/categories" end>Categories</NavLink>
          <NavLink className="menu-link" to="/products">Products</NavLink>
          <NavLink className="menu-link" to="/contacts" end>Contacts</NavLink>
        </div>
        <div className="menu-icons">
          <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass" />
          <MenuIcon hideOnMobile={true} quantity="0" link="/compare" icon="fa-regular fa-code-compare" />
          <MenuIcon hideOnMobile={true} quantity="0" link="/wishlist" icon="fa-regular fa-heart" />

          <button className="menu-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart">
            <span className="badge rounded-circle">{cartQuantity}</span>
            <i className="fa-regular fa-bag-shopping"></i>
          </button>



          <button onClick={toggleMenu} className='menu-icon btn-menu-icon'><i className='fa-regular fa-bars'></i></button>
        </div>
    </nav>
  )
}

export default MainMenuSection