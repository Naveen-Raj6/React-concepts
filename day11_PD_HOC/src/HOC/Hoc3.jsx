import React from 'react'
import Hoc from './Hoc'

const Hoc3 = (props) => {
    console.log(props);
    
  return (
    <div>
        {/* <h1>Hoc3 : {props.data.}</h1> */}
        <video src={props.video} height={200} width={200} controls ></video>
    </div>
  )
}

export default Hoc(Hoc3)