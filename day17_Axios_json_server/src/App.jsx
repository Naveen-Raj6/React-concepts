import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from './Components/MainPage'
import LoginPage from './Components/LoginPage'

let router=createBrowserRouter(
  [{
    path:'/',
    element:<MainPage></MainPage>,
    children:[
      {
        path:'/login',
        element:<LoginPage></LoginPage>
      }
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