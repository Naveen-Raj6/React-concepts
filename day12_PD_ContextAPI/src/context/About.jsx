import React, { Fragment } from 'react'
import { userContext } from './UserProvider';

const About = () => {
  return (
    <div>
        <userContext.Consumer>
            {
                (data)=>{
                    console.log(data.com);
                    
                    return <Fragment>
                        <h1>i'm About{data.com}</h1>
                        <h1>Bye by About{data.com}</h1>
                    </Fragment>
                }
            }
        </userContext.Consumer>
    </div>
  )
}

export default About