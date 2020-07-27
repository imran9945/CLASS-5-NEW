import React, { useContext } from 'react';
import CContext from './CContext';
const Child = () =>{
    let counterValue = useContext(CContext)
console.log(CContext)
    return(
        
    <div className="c1">
    <h2>CHILD NUMBER 1 USING COUNTER CONTEXT</h2>
    <h3>Counter Value Is :: {counterValue [0]}</h3>
    <button onClick={()=> {counterValue[1](++counterValue[0])}} >Increment Context Value</button>
    </div>
)
}
export default Child;