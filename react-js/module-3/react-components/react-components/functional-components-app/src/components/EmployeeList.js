import React from 'react';
const emp=[
    {
        id:1001, 
        name:'Brijesh',
        age:32 
    
    },
    {
        id:1002, 
        name:'Jatin',
        age:23 
    
    },
    {
        id:1001, 
        name:'Fenish',
        age:25
    
    },
    {
        id:1001, 
        name:'Parn',
        age:20
    
    }
]
export default function EmployeeList() {
  return (
    <div>
          
     {emp.map((items)=>
    
     {
    
       return  <p key={items.name}><b>Employee Name is :</b>{items.name}</p>

     })
      
    }
      
    </div>
  )
}
