// import React from 'react'

// const Player = (props) => {
//   return (
//     <div>
//         <video controls autoPlay src={props.player}></video>
//     </div>
//   )
// }

// export default Player



// *********************************************************************************************

import React from 'react'



const Player = (props) => {
   console.log(props.player);
   
  return (
    <div>
      <div id='vframe'>
        <video controls autoPlay src={props.player}></video>
        <div id='vdt' style={{width:'90%',border:'solid'}}>
          <h1 >Watch now {props.player.title}!</h1>
        </div>
        <div id='cad'>
          <span> <img src={props.player.thumbnail} alt="" id='clogo' height={40} width={50} /></span>
          <span>
            <p> <h2> {props.player.title} </h2> 
            {props.player.subscriber}
            
            <button style={{background:'white',borderRadius:'30px',padding:'10px 20px',color:'black',outline:'none',border:'none'}}>Subscriber</button></p>
          </span>
        </div>
       </div>
    </div>
  )
}

export default Player