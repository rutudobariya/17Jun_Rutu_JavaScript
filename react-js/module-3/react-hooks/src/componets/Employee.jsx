import React,{useState} from 'react'


const Employee = () => {
    const [name, setName] = useState (0);
  return (
    <>
   
     <h1>{name}</h1> 
   
    </>
  )
}

export default Employee
