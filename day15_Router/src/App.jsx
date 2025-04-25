// import React from 'react'
// import {createBrowserRouter,RouterProvider} from 'react-router-dom'
// import Home from './compnents/Home'
// import Cart from './compnents/Cart'
// import Order from './compnents/Order'
// import Shoes from './compnents/Shoes'
// import './App.css'


// let  router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Home></Home>,
//     children:[{
//       path:'/cart',
//       element:<Cart></Cart>
//     },
  
//     {
//       path:'/order',
//       element:<Order></Order>,
//       children:[
//         {
//           path:"/order/shoes",
//           element:<Shoes></Shoes>
//         }
//       ]
//     }

//   ]
//   }
// ])

// const App = () => {
//   return (
//     <div>
//       <RouterProvider router={router}></RouterProvider>
//     </div>
//   )
// }

// export default App

// ***************************************************************************

import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './compnents/Home'
import Cart from './compnents/Cart'
import Order from './compnents/Order'
import Shoes from './compnents/Shoes'
// import './App.css'


let  router = createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>,
    children:[{
      path:'/cart',
      element:<Cart></Cart>
    },
  
    {
      path:'/order',
      element:<Order></Order>,
      children:[
        {
          path:"/order/shoes",
          element:<Shoes></Shoes>
        }
      ]
    },
  ]
  }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App