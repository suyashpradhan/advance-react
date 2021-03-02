import React, { useState } from "react";

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const clickHandler = () => {
    setTodos([...todos, { id: Date.now(), todo: input, isDone: false }]);
    setInput("");
  };

  const doneTodo = (id) => {
    let completedTodo = [...todos];
    if (completedTodo[id].isDone === false) {
      completedTodo[id].isDone = true;
      setTodos(completedTodo);
    } else {
      completedTodo[id].isDone = false;
      setTodos(completedTodo);
    }
  };

  return (
    <div>
      <form>
        <input
          placeholder="Text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        ></input>
        <button type="button" onClick={clickHandler}>
          Add Todo
        </button>
      </form>

      {todos.map((item, index) => {
        return (
          <h1
            style={{ textDecoration: item.isDone ? "line-through" : "inherit" }}
            onClick={() => doneTodo(index)}
            key={item.id}
          >
            {item.todo}
          </h1>
        );
      })}
    </div>
  );
}

export default Todo;
