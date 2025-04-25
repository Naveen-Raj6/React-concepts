import React from 'react'
import {Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/pages/1">pages1</Link>
            </li>
            <li>
                <Link to="/pages/2">pages2</Link>
            </li>
            <li>
                <Link to="/pages/3">pages3</Link>
            </li>
            <li>
                <Link to="/pages/4">pages4</Link>
            </li>
        </ul>

        <div>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Home