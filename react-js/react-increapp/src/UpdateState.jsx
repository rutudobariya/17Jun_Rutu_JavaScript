import React,{useState} from 'react'

const UpdateState = () => {
    const [num, setNum] = useState (0);
    
    return (
    <div>
      <h4  style={{marginLeft:"50%"}}>Update State</h4>
      <button  style={{marginLeft:"50%"}} onClick={()=>{setNum(num+1)}}>Increase</button>
      <h3  style={{marginLeft:"52%"}}>{num}</h3>
      <button  style={{marginLeft:"50%"}} onClick={()=>{setNum(num-1)}}>Decrease</button> <br/> <br/>
      <button  style={{marginLeft:"50%"}} onClick={()=>{setNum(0)}}>Reset</button>

    </div>
  )
}

export default UpdateState
