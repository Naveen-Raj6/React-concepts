// import React from 'react'

// const VideoItems = (props) => {
//     console.log(props.play);
    
//     let {thumbnailUrl,title}=props.data 

//   return (
//     <div>
// <div 
// onClick={()=>{return props.play(props.data)}}>
//     <img height={200} width={200} src={thumbnailUrl} alt="" />
//     <h1>{title}</h1>
// </div>
//     </div>
//   )
// }

// export default VideoItems



// ******************************************************************************************************


import React from 'react'

const VideoItems = (props) => {
    // console.log(props.play);
    
    let {thumbnailUrl,title}=props.data
  return (
    <div>

    <div onClick={()=>{return props.play(props.data)}} id='rl'>
        <img height={200} width={200} src={thumbnailUrl} alt=""/>
        <h1>{title}</h1>
    </div>

    </div>
  )
}

export default VideoItems