import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const MainPage = () => {
  return (
    <div>
        <ul>
            
        <li> <Link to='/'>Main Page</Link> </li>
        <li> <Link to='/login'>Login Page</Link> </li>
            
        </ul>
        <div>
            <Outlet></Outlet>
        </div>
    </div>

   
  )
}

export default MainPage