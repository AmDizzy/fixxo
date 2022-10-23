import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuIcon = ({link, icon, quantity, hideOnMobile}) => {
  return (
    <NavLink className={`menu-icon ${hideOnMobile ? "d-none d-md-flex" : ""}`} to={link} end>
        <span className="badge rounded-circle">{quantity}</span>
        <i className={icon}></i>
    </NavLink>
  )
}

export default MenuIcon