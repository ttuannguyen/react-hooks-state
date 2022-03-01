import React, {useState} from "react"; //importing useState hook also

function Counter() {
  const [count, setCount] = useState(0);
  //count = ref to current value of that state 
  //setCount = setter function so we can update that state
  
  
  function increment() {
    
    setCount((currentCount) => currentCount + 1);
    setCount((currentCount) => currentCount + 1);
  
  }
  
  return <button onClick={increment}>{count}</button>; //using count var to dispay current state in <button> element 
}



export default Counter;
