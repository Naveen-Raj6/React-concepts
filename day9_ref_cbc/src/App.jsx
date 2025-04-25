                                                                            // this is class based Component
                                                                            //  to use ref we need to use createRef()



// import React, { Component, createRef } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()

//     this.state={
//       name:"",
//       password:""
//     }

//     this.txtName=createRef()
//     this.txtPass=createRef()
//   }

//   handleChange = ()=>{
//     this.setState({name:this.txtName.current.value,password:this.txtPass.current.value})
   
//     console.log(this.state.name,this.state.password);
//         }
       
//   render() { 
//     return (
//       <div>
//         Name: <input type="text" name='name' ref={this.txtName} />
//         password: <input type="text" name='password' ref={this.txtPass} />
     
//         <button type='submit' onClick={this.handleChange}>Submit</button>
         
//         <h1>{this.state.name}</h1>
//         <h1>{this.state.password}</h1>
//       </div>
//     )
//   }
// }





// *******************************************************************************************************************************


                                                                            // this function based comopanent
                                                                            //to use ref we need to use useref()




// import React, { useRef, useState } from 'react'

// const App = () => {
//   let [state,setState]=useState({
//     email:"",
//     telno:""
//   })

// let txtMail=useRef();
// let txtTel=useRef();

//  let handlechange = ()=>{
//   setState({email:txtMail.current.value,telno:txtTel.current.value})
// }
//   return (
//     <div>
//       e-mail: <input type="email" ref={txtMail} />
//       tel-no: <input type="tel" ref={txtTel} />
//       <button type='submit' onClick={handlechange}>submit</button>

//       <h1>{state.email}  {state.telno}</h1>
//     </div>
//   )
// }

// export default App


// ****************************************************************************************************



// import React, {  useRef, useState } from 'react'
// import { FaPause } from "react-icons/fa";
// import { FaPlay } from "react-icons/fa";
// import A from './a.mp4';

// import Playbtn from './Playbtn';

// import Pausebtn from './Pausebtn';

// const App = () => {

//   let videoRef=useRef();

{/* ************************************************************************************** */}

//m2


  // let [state,setState] =useState({
  //   count:0,
  //   mode:"play",
  //   active:<Playbtn/> 
  // });
  // console.log(state);

  // let handleVideo =()=>{
  //   if(state.count == 0){
  //     videoRef.current.play()
  //     setState({count:1,active:<Pausebtn/>})
      
      // console.log(state.active);
      
    // }
    // else if(state.count == 1){
    //   videoRef.current.pause()
    //   setState({count:0,active:<Playbtn/>})
    
      // console.log(state.count);
      
    // }
    // }
  

{/* ************************************************************************************** */}

// m1

  // let handlePlay =()=>{
  // videoRef.current.play()
  // }

  
  // let handlePause =()=>{
  //  videoRef.current.pause()
  // }

{/* ************************************************************************************** */}

  // return (
  //   <div>
  //     <video   width={420} height={200} ref={videoRef} src={A} autoplay/><br />

{/* ************************************************************************************** */}

{/* m1 */}

  {/* <button onClick={handlePlay} > Play</button> */
  /* <button onClick={handlePause}>Pause</button> */}

  {/* <button onClick={handlePlay}><FaPlay/></button>
  <button onClick={handlePause}><FaPause/></button> */}

{/* ************************************************************************************** */}

    {/* <button onClick={handleVideo} >
      {state.active}
      </button> */}

{/* ************************************************************************************** */}

{/* m2 */}

{/* <Playbtn ></Playbtn> */}
{/* <Pausebtn ></Pausebtn> */}


//     </div>
//   )
// }

// export default App



// *****************************************************************************************



import React, { useRef, useState } from 'react'
import {FaPlay} from "react-icons/fa"
import { FaPause } from "react-icons/fa";
import A from "./a.mp4"

const App = () => {

let [state,setState]=useState(true);

let vidref=useRef()

  let handleVid=()=>{
    setState(!state)

    if(state === true){
      vidref.current.play()
    }
    else{
      vidref.current.pause()
    }
  }
  return (
    <div>
      <video src={A} height={200} width={400} ref={vidref}></video>
      <br /> 
      <button onClick={handleVid}>{state ? <FaPlay title='Play'/> : <FaPause title='Pause'/>  }</button>
    </div>
  )
}

export default App