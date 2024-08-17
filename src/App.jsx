import { useState } from "react";
import './App.css'
function App() {

  const [count, setCount] = useState(0);
  const Add=()=> {
    if(count<20)
    setCount(count + 1);
  }
  const Sub=() =>{
    if(count>0) 
    setCount(count - 1);
  }
  return ( 
    <>
      <div>
        <h1>Counter Project</h1>
         <button onClick={Add}>Increase</button>
        <h1>{count}</h1>
       
        <br /><br />
        <button onClick={Sub}>Decrease</button>

      </div>
      
    </>
   );
}

export default App;