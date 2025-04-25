// import React, { Component } from 'react'
// import Data from './Data';


// export default class App extends Component {
//   constructor(){
//     super()

//     this.name="naveen";
//   }
//   render() {
//     return (
//       <div>
//        <Data  data={this.name}></Data>
//       </div>
//     )
//   }
// }



// *************************************************************************


// import React, { Component } from 'react'
// import Data from './Data'

// export default class App extends Component {

//   render() {
//     return (
//       <div>
//        <Data name="Naveen"></Data>
//       </div>
//     )
//   }
// }


// **************************************************************************


// import React, { Component } from 'react'
// import Data from './Data'

// export default class App extends Component {

//   render() {
//     return (
//       <div>
//        <Data max={{name:"Zoro",place:"Wano",age:21}}></Data>
//       </div>
//     )
//   }
// }


// *****************************************************************************

// import React, { Component, Fragment } from 'react'
// import Data1 from './Components/Data1'
// import Data2 from './Components/Data2'
// import Data3 from './Components/Data3'


// export default class App extends Component {
//   render() {
//     return (
//       <Fragment>
//         <Data1 max={<Data2 rio={<Data3></Data3>}></Data2>}></Data1>
//       </Fragment>
//     )
//   }
// }


// **************************************************************************

import React, { Component, Fragment } from 'react'
import Data1 from './Components/Data1'
import Data2 from './Components/Data2'
import Data3 from './Components/Data3'
import JSON from './Components/data.json'


export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Data1 max={<Data2 rio={<Data3 json={JSON}></Data3>}></Data2>}></Data1>
      </Fragment>
    )
  }
}


