import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Params/Home'
import Pages from './Params/Pages'

let router=createBrowserRouter(
  [
   {
    path:"/",
    element:<Home></Home>,
    children:[
      {
        path:"/pages/:id",
        element:<Pages></Pages>
      }
    ]
   }
  ]
  )

const App = () => {
  
  return (
    <div>
    <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App