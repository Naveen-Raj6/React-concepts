import React from 'react'
import {Link,Outlet} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <header id='headSection'>
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/cart">Cart</Link>
            <Link className='link' to="/order">Order</Link>
        </header>

        <div id='out'>
            <Outlet>
            
            </Outlet>
        </div>
    </div>
  )
}

export default Nav