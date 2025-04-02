import React from 'react'
import Cart from './Cart'
import { NavLink } from 'react-router-dom'


function Navbar() {
  return (
    <>
    <div className='header'>
    <NavLink className='logo' to='/FakeShop'>Fake Shop</NavLink>
    <Cart/>
    </div>
    </>
  )
}

export default Navbar