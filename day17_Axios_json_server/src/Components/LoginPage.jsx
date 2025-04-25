import axios from 'axios'
// import { router } from 'json-server'
import React, { useState } from 'react'

const LoginPage = () => {
    let [state,setState]=useState({
        name:"",
        pass:""
    })

    let {name,pass}=state

    let handleChange=(e)=>{
        let {name,value}=e.target

        setState({...state,[name]:value})

    }

    let handleSubmit=async(e)=>{
        e.preventDefault();

        try{
            let payload={name,pass}

            let userdata=await axios.post("http://localhost:3000/users",payload)
            console.log(userdata);
            alert("your data sent succesfull")
            
        }
        catch{
            console.log(err);
            
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name='name' value={name} onChange={handleChange} />
            <br />
            <label>password</label>
            <input type="text" name='pass' value={pass} onChange={handleChange} />
            <br />
            <input type="submit" value='submit' />

        </form>
    </div>
  )
}

export default LoginPage