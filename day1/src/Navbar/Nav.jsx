import React, { Component, Fragment } from "react";
import Logo from "./Logo";
import Cart from "./Cart";
import Home from "./Home";
import  About from "./About"

export default class Nav extends Component{
    render(){
        return(
            <Fragment>
                <nav id="nav">
                <Logo/>
                 <Home/>
                 <Cart/>
                 <About/>
                </nav>
                 

            </Fragment>
           
        )   
    }
}
