import React from 'react'
import Menu from './Menu'
import Brand from './Brand'
import Dots from './Dots'
import Search from './Search'
import Acc from './Acc'
import Mic from './Mic'


const Nav = () => {
  return (
    <div>
       <nav id='nav'>
       <div className='nb'>
       <Menu></Menu>
       <Brand></Brand>
       </div>

       <div className='nb ' id='nbm'>
       <Search></Search>
       <Mic></Mic>
       </div>

       <div className='nb'>
         <Dots></Dots>
       <Acc></Acc></div>
       </nav>
    </div>
  )
}

export default Nav