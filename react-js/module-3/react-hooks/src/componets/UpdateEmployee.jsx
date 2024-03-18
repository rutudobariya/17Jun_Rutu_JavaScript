import React, { useState } from 'react'

export default function UpdateEmployee() {
  const [name, setName] = useState ("rutu");
  return (
    <div>
      <h1>{name}</h1>
      <button type='button' style={{backgroundColor:'black',color:'white'}} onClick={()=>{setName("dhevan")}}>Click me</button>
    </div>
  )
}
