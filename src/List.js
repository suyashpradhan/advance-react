import React, { useState } from "react";

function List() {
  const [itemList, setItemList] = useState([
    {
      id: 0,
      list: "Pencil",
      liked: false,
    },
    {
      id: 1,
      list: "Pen",
      liked: false,
    },
    {
      id: 2,
      list: "Book",
      liked: false,
    },
    {
      id: 3,
      list: "Rubber",
      liked: false,
    },
  ]);

  const [likedButton, setLikeButton] = useState("Like this item");

  const clickHandler = (item) => {
    const likedArr = [...itemList];

    if (likedArr[item.id].liked === false) {
      likedArr[item.id].liked = true;
      setLikeButton(likedButton ? false : true);
      console.log(likedArr);
    } else {
      likedArr[item.id].liked = false;
      console.log(likedArr);
    }
  };

  return (
    <div>
      {itemList.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.list}</h2>
            <button onClick={() => clickHandler(item)}>
              {likedButton ? "Like this item" : "Item Liked"}
            </button>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default List;
