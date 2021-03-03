import React, { useState } from "react";
import "./style.css";

const DarkMode = () => {
  const [toggleMode, setToggleMode] = useState("Toggle Dark Mode");
  const [bgColor, setBgColor] = useState("#FFF");

  function toggleModeFunc() {
    setToggleMode(toggleMode ? false : true);
    setBgColor(bgColor ? false : true);
  }

  return (
    <div className={bgColor ? "bg-light" : "bg-dark"}>
      <button type="button" onClick={toggleModeFunc}>
        {toggleMode ? "Toggle Dark Mode" : "Toggle Light Mode"}
      </button>

      <p>
        lorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet,
        consectetur
      </p>
    </div>
  );
};

export default DarkMode;
