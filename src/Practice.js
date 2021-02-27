import React, { useState } from "react";

export default function App() {
  let [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCounter(++counter)}>+</button>
      <button onClick={() => setCounter(counter <= 0 ? 0 : --counter)}>
        -
      </button>

      <p>{counter}</p>
    </div>
  );
}
