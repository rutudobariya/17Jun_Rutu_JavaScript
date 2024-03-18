import React, {useState} from 'react'

export default function MultipleApp() {
    const [name,setName] = useState ("rutu");
    const [age,setAge] = useState ("28");
    const [salary,setSalary] = useState ("23500");
    const [address,setAddress] = useState ("Railnage,Rajkot");
    const [pincode,setPincode] = useState ("360001");

  return (
    <div>
        <h1>my name is {name} and age is {age} <br/> i am  getting my salary of {salary} <br/> and my adress is {address} <br/> and our pincode is {pincode}</h1>
        <button type='button' style={{backgroundColor:'black',color:'white'}} onClick={()=>{setName("dhevan")}}>Update Name</button>
        <button type='button' style={{backgroundColor:'black',color:'white'}} onClick={()=>{setAge("1")}}>update Age </button>
        <button type='button' style={{backgroundColor:'black',color:'white'}} onClick={()=>{setSalary("30000")}}>Update Salary</button>
        <button type='button' style={{backgroundColor:'black',color:'white'}} onClick={()=>{setAddress("keshod, Gujarat")}}>Update Address</button>
        <button type='button' style={{backgroundColor:'black',color:'white'}} onClick={()=>{setPincode("362002")}}>Update pincode</button>


    </div>
  )
}
