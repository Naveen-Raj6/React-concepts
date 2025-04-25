// import React, { Component } from 'react'

// import Data from './Data'


// export default class App extends Component {
//   constructor(){
//     super()

//     this.state={sub:"js"}
//   }
// changeEvent=()=>{
//   this.setState({sub:"react js"})
// }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.sub}</h1>
//         <Data data={this.state.sub} event={this.changeEvent}></Data>
       
        
//       </div>
//     )
//   }
// }



// **************************************************************************************


// import React, { Component } from 'react'
// // import Data from './Data'


// export default class App extends Component {
//   constructor(){
//     super()


//     this.state={
//       count:0
//     }
//   }

//   changeInc=()=>{
//     this.setState=({count:this.state.count+1})
//   }
  
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//      {/* <Data data={this.state.count} event={this.changeInc}></Data> */}
//      <button onClick={this.changeInc}>dec</button>
//      </div>
//     )
//   }
// }


// *****************************************************************************

                                                                // Assignment 1 


// import React, { Component } from 'react'
// import "./App.css"
// import Data from './Data'


// export default class App extends Component {
//   constructor(){
//     super()

//     this.state={count:0}
//   }
// changeEvent=()=>{
//   if(this.state.count <= 0){
//     document.body.style.background="red"
//     }
//     else{
//     document.body.style.background="white"
//     }
//   this.setState({count:this.state.count-1})
  
// }
// changesEvent=()=>{
//   if(this.state.count >= 0){
//     document.body.style.background="blue"
//     }
//     else{
//       document.body.style.background="white"
//       }
//   this.setState({count:this.state.count+1})
 
// }




//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <Data data={this.state.count} event={this.changeEvent} events={this.changesEvent}></Data>
       
        
//       </div>
//     )
//   }
// }



// ***********************************************************************************************************************

                                                                // Assignment 2



import React, { Component } from 'react'
import "./App.css"
import Data from './Data'


export default class App extends Component {
  constructor(){
    super()

    this.state={
      counter:true,
      mode:"LIGHT"
    }
  }

  darkScreen = ()=>{
  if(this.state.counter == false){
  document.body.style.background="black";
  this.setState={counter:this.state.counter=+1}
this.setState={mode:this.state.mode="Light"}
  }
  else if(this.state.counter == true ){
    document.body.style.background="yellow";
    this.setState={counter:this.state.counter=0}
    this.setState={mode:this.state.mode="Dark"}
  }
  else {
    // document.body.style.background="white";
    this.setState={counter:this.state.counter=0}
    // document.getElementsByTagName('main') = ()=>{}
  }
  // console.log(this.state.counter);
  // console.log(this.state.mode);
  }



  
  






  render() {
    return (
      <div>
       {/* <h1>{this.state.count}</h1> */}
     {/* <h1>{this.state.mode }</h1> */}
      <Data event={this.darkScreen} mode={this.state.mode} max={this.state.counter}></Data>
       
        
</div>
    )
  }
}


