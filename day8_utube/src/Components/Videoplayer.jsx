// import React, { Fragment } from 'react'
// import VideoItems from './VideoItems'
// import Player from './Player'

// const Videoplayer = ({state,player,play}) => {
//   return (
//     <div>

//         <div>
//             <aside>
//             <Player player={player}></Player>
//             </aside>

// {/* ***************************************************************** */

// <aside>
//     <div>
//         {
//             state.map((data)=>{
//                 console.log(data);

//                 return <Fragment key={data.id}>
//                     <VideoItems data={data} play={play}></VideoItems>
//                 </Fragment>
                
//             })
//         }
//     </div>
// </aside>
// }
//         </div>
//     </div>
//   )
// }

// export default Videoplayer



// ******************************************************************************************************


import React, { Fragment } from 'react'
import VideoItems from './VideoItems'
import Player from './Player'

const Videoplayer = ({state,player,play}) => {
  return (
    <div>

        <div id='mf'>
            <aside id='vp'>
            <Player player={player} ></Player>
            </aside>

{/* ***************************************************************** */

<aside>
    <div id='rvc'>
        {
            state.map((data)=>{
                // console.log(data);

                return <Fragment key={data.id}>
                    <VideoItems data={data} play={play}></VideoItems>
                </Fragment>
                
            })
        }
    </div>
</aside>
}
        </div>
    </div>
  )
}

export default Videoplayer