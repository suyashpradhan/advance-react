import React from "react";

const DisplayName = ({ name, age }) => {
  return (
    <>
      <h1>
        hello, I'm {name} & my age is {age}
      </h1>
      <button onClick={() => displayInfo("Suyash")}>Click Here</button>
    </>
  );
};

const displayInfo = (name) => {
  alert("Hello " + name);
};

export const Props = () => {
  return (
    <div>
      <DisplayName name="Suyash" age="24" display={displayInfo} />
    </div>
  );
};
