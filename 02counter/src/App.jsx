import { useState } from 'react'

import './App.css'

function App() {
  // Any change in the state rerenders the webpage
  // counter is variable and setcounter is a function
  // It can be a const because everytime you update the value, a new state is given to you
  const [counter, setCounter] = useState(0);
  
  // let counter = 5;

  const addValue = () => {
    // counter = counter + 1;
    setCounter(counter + 1)
    console.log(counter);
  }
  
  return (
    <>
      <h1>Counter design</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button> {" "}
      <button>remove value</button>
      <p>footer: {counter} </p>
    </>
  )
}

export default App
