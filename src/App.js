import React, {useState} from 'react';
import './App.css';
import Parent from './Parent';
import CContext from './CContext';
function App() {
let countstate= useState(0)
//let [count, SetCount] = useState(35)
  return (
    <CContext.Provider value={countstate}>
    <div>
      <Parent />
    </div>
    </CContext.Provider>
  );
}

export default App;
