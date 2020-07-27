import React,{useReducer} from 'react';
import CReducer from './CReducer';
const Child2 = ()=>{
    let [state, dispatch] = useReducer(CReducer,0)
    console.log(state)
    return(
        <div className="c2">
            <h2>CHILD 2 USING COUNTER REDUCER</h2>
            <h3>Value Of Reducer :: {state}</h3>
<button onClick={()=>dispatch('INCREMENT')}>Increment Reducer Value</button>
        </div>
    )
}
export default Child2;