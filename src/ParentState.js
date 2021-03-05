import React, { useState } from "react";

const ChildComponent = (props) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter value"
        onChange={(e) => props.changeText(e.target.value)}
      ></input>
      {}
    </>
  );
};

const ParentComponent = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Hello! {name ? name : "John Doe"}</h1>
      <ChildComponent changeText={(value) => setName(value)} />
    </div>
  );
};

export default ParentComponent;
