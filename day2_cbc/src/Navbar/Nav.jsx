import React, { Component, Fragment } from 'react'
import Left from './Left'
import Right from './Right'


export default class Nav extends Component {
  render() {
    return (
    <Fragment>
        <nav id='nav'>

         <Left></Left>
         <Right></Right>
         
        </nav>
    </Fragment>
    )
  }
}
