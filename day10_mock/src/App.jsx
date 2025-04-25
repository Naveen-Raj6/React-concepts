// import React, { useRef, useState } from 'react'
// import { FaLightbulb } from "react-icons/fa6";

// const App = () => {
//   let [state,setState]=useState(true)  
  
// let bulbref=useRef()

//  let onBulb =()=>{
//     if(state == true){
// setState=(state=false)
// document.getElementById('bb').style.color="yellow"
// console.log(state);

//     }
//   }

//   let offBulb=()=>{
//     if(state == false){
//       setState=(state=true)
//       document.getElementById('bb').style.color="black"
      
//       console.log(state)
//           }
//   }
//   return (
//     <div>
// <div style={{height:'400px',border:'2px solid black',display:'flex',alignItems:'center' ,justifyContent:'center',width:'400px'}} >
// <FaLightbulb id='bb' style={{o[utline:'brown', height:'300px', width:'250px'}} ref={bulbref}/>
//   </div>
//       <button onClick={offBulb}>Off</button>
//       <button onClick={onBulb}>on</button>
//     </div>
//   )
// }

// export default App



// ****************************************************************************************************



import React, { useRef, useState } from 'react'
import ON from './bbo.jpeg'
import OFF from './bboff.jpeg'

const App = () => {
  let [state,setState]=useState(false)  
  
let bulbref=useRef()

 let onBulb =()=>{
setState(true)

  }

  let offBulb=()=>{
    setState(false)
        
  }
  return (
    <div>
<img src={state ? ON : OFF} alt="" height={400} width={300}  ref={bulbref} id='img'  />
<br />
      <button onClick={offBulb}>Off</button>
      <button onClick={onBulb}>on</button>
    </div>
  )
}

export default App
