import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(100);

  const incrementCount = () => {
    setCount(count + 1);
  }

  const decrementCount = () => {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <h1>This is value of count {count}</h1>
      <button onClick={()=>{incrementCount()}}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>


    </div>
  );
}

export default App;
