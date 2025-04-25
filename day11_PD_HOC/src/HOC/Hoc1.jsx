import React from 'react'
import Hoc from './Hoc'

const Hoc1 = (props) => {
    console.log(props.img);
    
  return (
    <div>
        {/* <h1>Hoc1 : {props.data}</h1> */}
        <img src={props.img.A} alt="" height={200} width={200} />
        <img src={props.img.B} alt="" height={200} width={200} />
    </div>
  )
}

export default Hoc(Hoc1)