import React from 'react'
import { useParams } from 'react-router-dom'

const Pages = () => {
    let {id}=useParams()
  return (
    <div>
        <h1>Iam page{id}</h1>
    </div>
  )
}

export default Pages