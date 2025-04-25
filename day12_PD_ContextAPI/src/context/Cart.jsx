import React, { useRef, useState } from 'react'
import { userContext } from './UserProvider'
import { Fragment } from 'react';

const Cart = () => {
 
    let [state,setState]=useState(true)

    let vidref=useRef();

    let handlePlay=()=>{
        setState(!state)
       if(state === true){
        vidref.current.play();
      
       }
       else{
        vidref.current.pause();
       }
    }

  return (
    <div>
        <userContext.Consumer>
            {
                (data)=>{

                   console.log(data.com);
                   
                   return <Fragment>
           
                    <img src={data.img1} alt="" height={200} width={240} />
                    <img src={data.img2} alt="" height={200} width={240} />
                    
                    <video src={data.vid} height={200}  width={600} ref={vidref}></video> 
                    <button onClick={handlePlay}>click</button>
                    <h1>{data.com}</h1>
                   </Fragment>
                }
            }
        </userContext.Consumer>
    </div>
  )
}

export default Cart