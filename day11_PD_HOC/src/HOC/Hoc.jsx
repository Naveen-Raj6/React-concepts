// Props driling Higher Order Component


import React from 'react'
import A from "./bbo.jpeg"
import B from "./bboff.jpeg"
import C from "./a.mp4"

const Hoc = (Magic) => {
 let data =()=>{
    return <Magic data={{name:"naveen",age:21,height:5}} img={{A,B}} video={C} ></Magic>
 }
 return data

}

export default Hoc