import React, { useState } from "react";

export default function App() {
  let [count, setCount] = useState(0);
  const addCount = () => {
    setCount(++count);
  };
  const resetCount = () => {
    if (count > 0) setCount(0);
  };

  return (
    <div className="countDisplay">
      <header className="App">
        <h1 className="head1">React Practice</h1>
        <h2 className="head">1. Counter</h2>
        <button className="count" onClick={addCount}>
          Add
        </button>
        <button className="counter">{count}</button>
        <button className="reset" onClick={resetCount}>
          Reset
        </button>

        
      </header>
    </div>
  );
}
