// import React, { useState } from 'react'

// const App = () => {
//   let [state,setstate] = useState(0)


//   let changeValue = ()=>{
//     setstate(state+1)
//   }
//   return (
//     <div>
//       <h1>{state}</h1>
//       <button onClick={changeValue}>click</button>
//     </div>
//   )
// }

// export default App


// *******************************************************************************************


// import React, { useState } from 'react'

// const App = () => {

//   let  [counter,setstate] = useState(0)


//   let valueInc =()=>{
//     setstate(counter+1)
//   }

//   let valueDec =()=>{
//     setstate(counter-1)
//   }
//   return (
//     <div>
//       <h1>{counter}</h1>
// <button onClick={valueInc}>Inc</button>
// <button onClick={valueDec}>Dec</button>
//     </div>
//   )
// }

// export default App


// *******************************************************************************************


import React, { useState } from 'react'
import "./App.css"

const App = () => {

  // let [screen,setstate] = useState({count:0, mode:"Dark"
  // })

  let [count,setCount] = useState(0)
  let [mode,setMode] = useState("Dark")
  let eventScreen =()=>{
    if(count == 0){
      // document.body.style.background ="black"
      document.getElementById('box').style.background="black"
      setCount(count+1)
      setMode(mode="Light")
      // setstate(screen.mode="Light")
    }
    else if(count == 1){
//  document.body.style.background ="yellow"
 document.getElementById('box').style.background="yellow"
 setCount(count-1)
 setMode(mode="Dark")
//  setstate(screen.mode="Light")
    }
  }

  return (
    <div>
      <main id='box'>
   
      </main>
      
<button onClick={eventScreen}>
  {mode}
</button>
    </div>
  )
}

export default App