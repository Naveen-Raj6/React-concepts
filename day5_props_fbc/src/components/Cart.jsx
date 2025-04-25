import React, { Fragment } from 'react'

const Cart = (props) => {
    // console.log(props);
  return (
    <div>
        {
            props.json.map((details)=>{
                if(details.login == "mojombo"){
                console.log(details.id);
                }
                
                return <Fragment key={details.id}>
                  <h1>{details.login} </h1></Fragment>

                // if(details.login == "mojombo"){
                //   let op= details.node_id;
                // }

                // return op;
                
            })
        }
    </div>
  )
}

export default Cart