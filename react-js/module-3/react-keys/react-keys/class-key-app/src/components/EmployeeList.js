import React from "react";
// react-keys : react-key are used to key are work as attributes and is used to pass data as query string for using to udpdate | edit | delete particulars data passing with its key.

// A class is used to create a member function
// A class property used by another class using extends it meanse a class property used by another class it meanse inherited by another class.

// react-listing : list any data inside of tables | sections applied loop or map() functions
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
class EmployeeList extends React.Component
{
    render()
    {
        return(

            <>
            <h1>Hi i am just Load Employee List</h1>

            </>
        )
    }
}

class EmployeeData extends React.Component
{
    render()
    {
        return (

            <>

            <EmployeeList />

            {emp.map((items)=>{

                return <p key={items.name}>{items.name}</p>

            })}
            
            </>
        )
    }
}

export default EmployeeData