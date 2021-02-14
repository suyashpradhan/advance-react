import React, { useState } from "react";
import "../App.css";

function CharacterCounter() {
  let [character, setCharacter] = useState("");
  let [count, setCounter] = useState(1);

  let totalLimit = 280;
  let userInput;
  function changeHandler(e) {
    userInput = e.target.value.length;
    if (userInput > totalLimit) {
      setCharacter("Exceeded");
      setCounter(totalLimit + 1);
    } else {
      setCounter(totalLimit - 1);
    }
  }

  return (
    <div>
      <h1>Assignment</h1>

      <form>
        <label>Check Character Limit (Max Limit 280)</label>
        <br />
        <input
          type="text"
          onChange={changeHandler}
          placeholder="Start Typing..."
          className="field"
        ></input>
      </form>

      <span>Charaters Remaining: {character} </span>
      <span>{count}</span>
    </div>
  );
}

export default CharacterCounter;
