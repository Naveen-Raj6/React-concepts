import React from 'react'
import UserProvider from './Context/UserProvider'
import Cart from './Context/Cart'
import Home from './context/Home'
import About from './context/About'


const App = () => {
  return (
    <div>
  <UserProvider>
    <Cart></Cart>
    <Home></Home>
    <About/>
  </UserProvider>
    </div>
  )
}

export default App