// import React from 'react'
// import {Link,Outlet} from 'react-router-dom'

// const Home = () => {
//   return (
//    < div>
//     <div id='main'>
//         <Link className='link' to="/">Home</Link>
//         <Link className='link' to="/cart">Cart</Link>
//         <Link className='link' to="/order">Order</Link>
                                 
//     </div>

//     <div id='out'>
//         <Outlet>
        
//         </Outlet>
        
//     </div>
//    </ div>
//   )
// }

// export default Home



// *************************************************************************


import React from 'react'
import Nav from './Nav'


const Home = () => {
  return (
   <div>
      <div id='main'>
        <Nav></Nav>
      </div>
   </ div>
  )
}

export default Home