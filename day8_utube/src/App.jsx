// import React, { useState } from 'react'
// import VIDEO from "./Components/data.json"
// import Videoplayer from './Components/Videoplayer'

// const App = () => {

//   let[state,setState]=useState(VIDEO)
//   let[player,setPlayer]=useState(state[0])
// console.log(state);

// let handlePlay=(rio)=>{

//   setPlayer(rio.videoUrl)
  
// }

//   return (
//     <div>
//       <Videoplayer state={state} player={player} play={handlePlay}>

//       </Videoplayer>
//     </div>
//   )
// }

// export default App





// ***************************************************************************************



                                        //Youtube page


import React, { useState } from 'react'
import VIDEO from "./Components/data.json"
import Videoplayer from './Components/Videoplayer'
import "./App.css"
import Nav from './Navbar/Nav'

const App = () => {

  let[state,setState]=useState(VIDEO)
  let[player,setPlayer]=useState(state[0])
// console.log(state);

let handlePlay=(clip)=>{

  setPlayer(clip.videoUrl)
 
}

  return (
    <div>

    <Nav></Nav>

      <Videoplayer state={state} player={player} play={handlePlay}>

      </Videoplayer>
    </div>
  )
}

export default App
