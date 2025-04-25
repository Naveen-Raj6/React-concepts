import React, { createContext } from 'react'
import Data from './Data';
import A from "/bbo.jpeg";
import B from "/i_v/bboff.jpeg";
import C from "/i_v/a.mp4";

export let userContext=createContext()

const UserProvider = ({children}) => {
  return (
   

 <userContext.Provider value={{com:<Data></Data>,img1:A,img2:B,vid:C}}>
{children}
</userContext.Provider> 

  )
}

export default UserProvider