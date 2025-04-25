import React, { Fragment } from 'react'
import Left from './Left'
import Right from './Right'

export let Nav = () => {
  return (
  <Fragment>
    <nav id="nav">
    <Left></Left>
    <Right></Right>
    </nav>
  </Fragment>
  )
}

export default Nav