import { useState } from "react";

export default function Toast() {
  const [toast, setToast] = useState({
    DisplayDiv: "none",
    DisplayButton: "inline-block",
  });

  function changeToastHandler() {
    if (toast.DisplayDiv === "none") {
      setToast({ DisplayDiv: "block", DisplayButton: "none" });
    } else {
      setToast({
        DisplayDiv: "none",
        DisplayButton: "inline-block",
      });
    }
  }

  return (
    <div className="App">
      <div className="container">
        <button
          style={{
            display: toast.DisplayButton,
          }}
          onClick={changeToastHandler}
        >
          Success Toast
        </button>

        <div
          className="toast-div"
          style={{
            display: toast.DisplayDiv,
          }}
        >
          Welcome, Login Successful!
          <button className="remove" onClick={changeToastHandler}>
            X
          </button>
        </div>
      </div>
    </div>
  );
}
