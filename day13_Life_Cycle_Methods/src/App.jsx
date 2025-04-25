// import React, { Component } from 'react'

// export default class App extends Component {

//   constructor(){
//     super()
//     this.state={
//       count:0
//     }
//   }

//   handleChange=()=>{
//     this.setState({count:this.state.count+1})
//   }

  // componentDidMount=()=>{
  //   alert("Accept Cookies")
  //   document.title=`I will execute only once in life time ${this.state.count}`
  // }

//   componentDidUpdate=()=>{
//     alert("Accept Cookies")
//     document.title=`I will execute when ever the state change ${this.state.count}`
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleChange}>CLICK</button>
//       </div>
//     )
//   }
// }


// ****************************************************************************


// import React, { Component } from 'react'

// export default class App extends Component {

//   constructor(){
//     super()
//     this.state={
//       delete:false
//     }
//     console.log(this.state.delete);
//   }

//   onDelete=()=>{
//     this.setState({delete:true})
//     console.log(this.state.delete);
    
//   }

  

//   render() {
//     console.log(this.state.delete);
//     return (
//       <div>
//         <button onClick={this.onDelete}>DELETE</button>
//         {
//           this.state.delete ? null:<User/>
//         }
//       </div>
//     )
//   }
// }

// class User extends React.Component{

//   componentWillUnmount=()=>{
//     alert("Do you want to delete permanently")
//     // confirm("Do you want to delete permanently")
//     document.title="it's deleted"
//     console.log("after clicking delete im deleted");
    
//   }

//   render(){
//     return(
//       <div>
//         <h1>User Name: Darshan</h1>
//       </div>
//     )
//   }
// }




// *********************************************************************************

import React, { Component } from 'react'

export default class App extends Component {
  componentWillUnmount(){
    alert("you have removed the element or component")
    console.log("component is begin removed so i'm printing here");
  }
  render() {
    return (
      <div>
         {/* if you remove this h1 and content it will trigger the componentWillUnmount and it will executed once it removed */}
        <h1>this is ComponentWillUnmount</h1> 
        </div>
    )
  }
}
