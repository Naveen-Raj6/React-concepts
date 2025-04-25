
import React, { Fragment } from 'react'
import { userContext } from './UserProvider';

const Home = () => {
  return (
    <div>
        <userContext.Consumer>
        {
                (data)=>{

                   console.log("im" + data.com);
                   return <Fragment>
                   <h1>hi Home{data.com}</h1>
                   <h1>bye others{data.com}</h1>
                  </Fragment>
                }
            }
        </userContext.Consumer>
    </div>
  )
}

export default Home


// ***************************************************************
