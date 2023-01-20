import {useState} from "react";


function App() {
  let [count, setCount] = useState(0)
  return (
    <div className='app'>
      <div className="counter">
        <div className="plus" onClick={() => setCount(count = count + 1)}>Increment</div>
        <div className="number">{count}</div>
        <div className="minus" onClick={() => setCount(count = count - 1)}>Decrement</div>
      </div>
    </div>
  );
}

export default App;
