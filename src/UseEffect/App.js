import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor";
import "../App.css";

function App() {
  let [counter, setCounter] = useState(0);
  let [color, setColor] = useState("");

  function clickHandler() {
    setCounter((prevCount) => prevCount + 1);
  }

  useEffect(() => {
    setColor(randomcolor());
  }, [counter]);

  return (
    <div>
      <h1>React useEffect hook</h1>
      <button onClick={clickHandler}>Increment {counter}</button>
      <br />
      <br />
      <h2 style={{ color }}>Random Text</h2>
    </div>
  );
}

export default App;
