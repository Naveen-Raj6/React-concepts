// import React, { Component } from 'react'

// export default class Data3 extends Component {
//   render() {
   
//     return (
//       <div>
//         <h1>
//             HI
//             </h1>
//       </div>
//     )
//   }
// }


// *****************************************************************


import React, { Component, Fragment } from 'react'

export default class Data3 extends Component {
  render(props) {
   console.log(this.props);
   
    return (
      <div>
        
            {
                this.props.json.map((data)=>{

                    if(data.login == "mojombo"){
                    console.log(data.login);
                    console.log(data.node_id);
                    console.log(data.id);
                    }
                  
                return <Fragment key={data.id}>
                 {
    //   <img src={data.avatar_url} alt="" />
    <h1>{data.login}</h1>
                        
                        }
                </Fragment>





  })
            }
      </div>
    )
  }
}