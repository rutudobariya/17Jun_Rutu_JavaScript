import React from "react";
const a=45;
const b=65;
function Clc()
{
    return (
           <>
             <h1 align="center" style={{color:"blue",fontSize:"60px"}}>The addition of number is:{a+b}</h1>
             <h1 align="center" style={{color:"blue",fontSize:"60px"}}>The subtraction of number is:{a-b}</h1>
             <h1 align="center" style={{color:"blue",fontSize:"60px"}}>The multiplication of number is:{a*b}</h1>
             <h1 align="center" style={{color:"blue",fontSize:"60px"}}>The divison of number is:{a/b}</h1>
           </>
    );
}
export default Clc;