import React,{useState} from 'react'

export default function EmployyArray() {
    const [data,setData]=useState([
        {id:1,name:"brijesh",age:34},
        {id:2,name:"deesha",age:24},
        {id:3,name:"pooja",age:27},
    ]);

    const updateAge=()=>{
        setData(prevData=>{
            const newData=[...prevData];
            // new data updated here
            newData[0].age=32;
            newData[1].age=25;
            newData[2].age=28;
            return newData;
        })
    }

    const updateName=()=>{
        setData(prevData=>{
            const newData=[...prevData];
            // new data updated here
            newData[0].name="rajesh";
            newData[1].name="umesh";
            newData[2].name="kumar";
            return newData;
        })
    }

    

  return (
    <div>
       {data.map((item)=>{
        return(
            <>
            <ul>
                <li>{item.name}</li>
                <li>{item.age}</li>

            </ul>
            </>
        )
       })}
       <button type='button' onClick={updateAge}>UPdate Age</button>
       <button type='button' onClick={updateName}>UPdate Name</button>

    </div>
  )
}
