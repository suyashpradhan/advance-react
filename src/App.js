import React, { useState } from "react";

const App = () => {
  const [password, setPassword] = useState([]);
  const [confPassword, setConfPassword] = useState([]);

  let FieldType = "password";
  const checkPassword = () => {
    console.log(password);
  };

  return (
    <div>
      <form>
        <input
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="text"
        ></input>
        <input
          placeholder="Confirm Password"
          onChange={(e) => setConfPassword(e.target.value)}
          value={confPassword}
          type="text"
        ></input>
        <br />
        <br />

        <button type="button" onClick={checkPassword}>
          See Password
        </button>

        <button disabled={confPassword !== password ? true : false}>
          Submit Password
        </button>
      </form>
    </div>
  );
};

export default App;
