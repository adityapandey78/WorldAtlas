import React from 'react'
import { NavLink } from 'react-router-dom'
import './App.css'
const Header = () => {
  return (
    <div className='container'>
      <div className='grid navbar-grid'>
      <div className="Logo">
        <NavLink to="/">
          <h1>
            WordlAtlas
          </h1>
        </NavLink>
      </div>
      </div>
    </div>
  )
}

export default Headerc