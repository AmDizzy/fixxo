import React from 'react'
import { NavLink } from 'react-router-dom'

const Breadcrumb = ({location}) => {
  return (
    <section className="breadcrumb">
        <div className="container">
            <ul>
                <li>
                    <NavLink to="/">
                        <i className="fa-sharp fa-solid fa-house"></i>
                    </NavLink>
                </li>
                <li>{location}</li>
            </ul>
        </div>
    </section>
  )
}

export default Breadcrumb