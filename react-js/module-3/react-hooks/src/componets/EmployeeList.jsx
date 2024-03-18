import React, { useState } from 'react';

const EmployeeList = () => {
    const [emp, setEmp] = useState({
        id: 1,
        namee: "rutu",
        age:"22",
        salary: "3500",
        address: "railnager,rajkot",
        pincode: "36001"
    });

    const updateName = () => {
        setEmp(previousState => {
            return { ...previousState, namee: "Dipa solanki" }; 
        });
    }
    const updateAge = () => {
      setEmp(previousState => {
          return { ...previousState, age: "25" }; 
      });
  }
  const updateSalary = () => {
    setEmp(previousState => {
        return { ...previousState, salary:"125000" }; 
    });
}
const updateAddress = () => {
  setEmp(previousState => {
      return { ...previousState, address:"madhapar" }; 
  });
}

    const { namee, salary, address, pincode,age } = emp; // Destructuring the state variables

    return (
        <div>
            <h1>My name is {namee} and age is {age} <br/> I am getting my salary of {salary} <br/> My address is {address} <br/> Our pincode is {pincode}</h1>
            <button type='button' onClick={updateName}>Update Name</button>
            <button type='button' onClick={updateAge}>Update Age</button>
            <button type='button' onClick={updateSalary}>Update Salary</button>

             <button type='button' onClick={updateAddress}>Update address</button>

        </div>
    );
}

export default EmployeeList;
