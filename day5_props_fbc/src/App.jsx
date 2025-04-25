import React, { Fragment } from 'react'
import Home from './components/Home'
import Cart from './components/Cart'
import JSON from  './components/data.json'

const App = () => {
  return (
   <Fragment>
    <Home data={<Cart json={JSON}></Cart>}></Home>
   </Fragment>
    
  )
}

export default App