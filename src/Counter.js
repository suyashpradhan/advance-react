import React, { useState } from "react";
import "./App.css";

function App() {
  let [handler, setchangeHandler] = useState("");
  let [data, setData] = useState(20);

  return (
    <div>
      <h1>Practicing ReactJS</h1>
      <input
        placeholder="Enter Text"
        onChange={(e) => setchangeHandler(e.target.value)}
      ></input>
      <br />
      <br />
      <button onClick={() => setData(data + 20)}>Increment</button>
      <button onClick={() => setData(data - 10)}>Decrement</button>
      <br />
      <br />
      <h2 style={{ fontSize: data }}>{handler}</h2>
    </div>
  );
}

export default App;
