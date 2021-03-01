import React, { useState } from "react";
import uuid from "react-uuid";

const myRouters = {
  home: {
    id: 1,
    content: "welcome to home",
  },
  about: {
    id: 2,
    content: "hello, i'm suyash",
  },
  contact: {
    id: 3,
    content: "@linkedin",
  },
};

const routerArr = Object.keys(myRouters);

function Tabs() {
  const [routerData, setRouterData] = useState("");

  const showRoutes = (item) => {
    setRouterData(item);
  };

  return (
    <div>
      <h1>Tabs</h1>
      <ul>
        {routerArr.map((item) => {
          return (
            <li
              style={{ cursor: "pointer" }}
              onClick={() => showRoutes(item)}
              key={uuid()}
            >
              {item}
            </li>
          );
        })}

        <h1>{routerData}</h1>
      </ul>
    </div>
  );
}

export default Tabs;
