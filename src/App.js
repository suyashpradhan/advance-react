import React, { useState } from "react";

const App = () => {
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [buttonText, setButtonText] = useState("Show Password");

  const checkPassword = () => {
    setShowPassword(showPassword ? false : true);
    setButtonText(buttonText ? false : true);
  };

  return (
    <div>
      <form>
        <input
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type={showPassword ? "text" : "password"}
        ></input>
        <input
          placeholder="Confirm Password"
          onChange={(e) => setConfPassword(e.target.value)}
          value={confPassword}
          type={showPassword ? "text" : "password"}
        ></input>
        <br />
        <br />

        <button type="button" onClick={checkPassword}>
          {buttonText ? "Show Password" : "Hide Password"}
        </button>
        <br />
        <br />
        <button
          disabled={
            (confPassword === "" && password === "") ||
            confPassword !== password
              ? true
              : false
          }
        >
          Submit Password
        </button>
      </form>
    </div>
  );
};

export default App;
