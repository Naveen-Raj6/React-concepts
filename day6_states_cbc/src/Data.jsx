// import React, { Component } from 'react'

// export default class Data extends Component {
//   render(props) {
//     console.log(this.props);
    
//     return (
//       <div>
//           <button onClick={this.props.event}>Click</button>
//       </div>
//     )
//   }
// }



// *****************************************************************************

                                        //  Assigment 1

// import React, { Component } from 'react'

// export default class Data extends Component {
//   render(props) {
//     return (
//       <div>
//          <button onClick={this.props.event}>Dec</button>
//          <button onClick={this.props.events}>Inc</button>
//          </div>
//     )
//   }
// }


// *********************************************************************************

                                        // Assigment 2

 
import React, { Component } from 'react'

export default class Data extends Component {
  render(props) 
  
  {
    console.log(this.props.mode);
    return (
      <div>
      <article></article>
         <button onClick={this.props.event}>
         {this.props.max == true ? "DARK" : "LIGHT"}
              
          </button>
         
         </div>
    )
  }
}
