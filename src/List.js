import React, { useState } from "react";
import "./App.css";

let usersObj = {
  name: "Suyash",
  age: 24,
  designation: "UI Developer",
  location: "Mumbai",
};

let usersArr = Object.keys(usersObj);

function List() {
  let [input, setInput] = useState("");

  function clickHandler(item) {
    setInput(usersObj[item]);
  }

  function inputHandler(e) {
    let userInput = e.target.value;
    input = usersObj[userInput];

    if (input) {
      setInput(input);
    } else {
      setInput("No Details:(");
    }
  }

  return (
    <div>
      <h1>Practicing ReactJS</h1>

      <input placeholder="Guess" onChange={inputHandler}></input>

      {usersArr.map(function (item, index) {
        return (
          <h3
            style={{ cursor: "pointer" }}
            key={index}
            onClick={() => clickHandler(item)}
          >
            {item}
          </h3>
        );
      })}

      <br />
      <h2>Details: {input}</h2>
    </div>
  );
}

export default List;
