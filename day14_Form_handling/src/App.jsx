// import React, { useState } from 'react'

// const App = () => {
//   let [state,setState]=useState("")

  
//   return (
//     <div>
//       <form action="" onSubmit={(e)=>{ e.preventDefault(); console.log({state})}}>
//         <label htmlFor="">Name</label>
//         <input type="text" name='' onChange={(e)=>{setState(e.target.value)}} />

//         <input type="submit" value="submit" />
//       </form>
//     </div>
//   )
// }

// export default App




// ******************************************************************************************************************************


// import React, { useState } from 'react'

// const App = () => {

//   let [state,setState]=useState({

//     Uname:"",
//     pass:"",
//     gmail:"",
//     gender:""
//   })


//   let {Uname,pass,gmail,gender}=state

//   let handleChange=(e)=>{
//     let {name,value}=e.target

//     setState({...state,[name]:value})

//   }

//   let handleSubmit=(e)=>{
//     e.preventDefault()
//   }

//   try{
//     console.log({...state});
    
//   }
//   catch{
//     console.log(err);
    
//   }

//   return (
//     <div>
//       <form action="" onSubmit={handleSubmit}>
//         <label htmlFor="">UserName:</label><input type="text" name="Uname" value={Uname} id="" onChange={handleChange} /><br />
//         <label htmlFor="">Password</label><input type="text" name="pass" value={pass} id="" onChange={handleChange} /><br />
//         <label htmlFor="">Gmail</label><input type="email" name="gmail" value={gmail} id="" onChange={handleChange} /><br />
//         <label htmlFor="">gender</label><br />
//         Male:<input type="radio" name="gender" value="male" id="" onChange={handleChange} /><br />
//         Female:<input type="radio" name="gender" value="female" id="" onChange={handleChange} /><br />

//         <input type="submit" value="Submit" />
//       </form>
//     </div>
//   )
// }

// export default App



// **************************************************************************************************************


// import React, { useState } from 'react'

// const App = () => {
//   let [state,setState]=useState({
//     uname:"",
//     pass:""
//   })

//   let [crouse,setCrouse]=useState([
//     "java","python","kotlin"
//   ])




//   let {uname,pass}=state;

//   let handleChange=(e)=>{

//     let {name,value}=e.target

//         setState({...state,[name]:value})

//   }

//   let handleCheck=(e)=>{

//     let {name,value}=e.target

//        if(value == checked)

//   }
  

//   let handleSubmit=(e)=>{
//     e.preventDefault()

//     try{
//       console.log({...state});
      
//     }
//     catch{
//       console.log(err);
      
//     }
//   }



//   return (
//     <div>
//      <form action="" onSubmit={handleSubmit}>
//       name: <input type="text" name="uname" id="" value={uname} onChange={handleChange} /><br />
//       password: <input type="password" name="pass" id=""  value={pass} onChange={handleChange}/><br />
//      coruse: <br />
//      java  <input type='checkbox' name="crouse1" value={crouse[0]} onChange={handleCheck}/>
//      python <input type='checkbox' name="crouse2" value={crouse[1]} onChange={handleCheck} />
//      kotlin <input type='checkbox' name="crouse3" value={crouse[2]} onChange={handleCheck} />
//      <br />
//       <button >submit</button>
//      </form>
//     </div>
//   )
// }

// export default App


 // ************************************************************************************************************************************


//  import React, { useState } from 'react'
 
//  const App = () => {
//   let[isChecked,setIsChecked]=useState(false);

//   let handleCheck=()=>{
//     setIsChecked(!isChecked);
//   }
//    return (
//      <div>
//       <input type="checkbox" name="" id="" checked={isChecked} onChange={handleCheck}/>
//       {isChecked ? 'Checked' : 'NotChecked'}
//      </div>
//    )
//  }
 
//  export default App


// *************************************************************************************************************************************************

import React, { useState } from 'react';

const App = () => {
  const [state, setState] = useState({
    Uname: '',
    pass: '',
    gmail: '',
    gender: '',
    hobbies: []
  });

  const { Uname, pass, gmail, gender, hobbies } = state;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (checked) {
        setState({ ...state, hobbies: [...hobbies, value] });
      }
       else {
        setState({ ...state, hobbies: hobbies.filter((hobby) => hobby !== value) });
      }
    } else {
      setState({ ...state, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log({ ...state });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>UserName:</label>
        <input type="text" name="Uname" value={Uname} onChange={handleChange} /><br />
        <label>Password:</label>
        <input type="password" name="pass" value={pass} onChange={handleChange} /><br />
        <label>Gmail:</label>
        <input type="email" name="gmail" value={gmail} onChange={handleChange} /><br />
        <label>Gender:</label><br />
        Male:<input type="radio" name="gender" value="male" onChange={handleChange} /><br />
        Female:<input type="radio" name="gender" value="female" onChange={handleChange} /><br />
        <label>Hobbies:</label><br />
        Reading:<input type="checkbox" name="hobbies" value="Reading" onChange={handleChange} /><br />
        Traveling:<input type="checkbox" name="hobbies" value="Traveling" onChange={handleChange} /><br />
        Cooking:<input type="checkbox" name="hobbies" value="Cooking" onChange={handleChange} /><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default App;
