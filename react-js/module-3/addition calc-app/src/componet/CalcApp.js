import React from 'react';
import {add, sub,mul,div} from './calclogic';

export default function CalcApp() {
  return (
    
    <div>
        <center>
        <h1>Calculate Here</h1>
      <button onClick={add} className="btn btn-secondary">Addition</button>
      <button onClick={sub} className="btn btn-secondary">Subtraction</button>
      <button onClick={mul} className="btn btn-secondary">Multiplication </button>
      <button onClick={div} className="btn btn-accent">Divison</button>
      </center>
    </div>

  )
}
