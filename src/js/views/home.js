import React from "react";
import "../../styles/home.css";
import { useContext, createContext, useState } from "react";
import { Context } from "../store/appContext";
import { AiOutlineClose } from "react-icons/ai";

export const Home = () => {
  const { store, actions } = useContext(Context);
  console.log("store", store);
  const [todoList, setTodoList] = useState(store.list);
  console.log("todoList", todoList);
  const [texto, setTexto] = useState("");

  function addTodo(input) {
    const newList = (actions.addTask(input)) 
    setTodoList(newList);
  }
  console.log("todoList5555####", todoList)
  const listItems = todoList.map((item, index) => {
    return (
      <li
        key={index}
        className="d-flex flex-row justify-spacing-between"
        onClick={(e) => deleteTask(e)}
      >
        {item}
        <p className="deletebutton">
          <AiOutlineClose
            onClick={(e) => removeTodo(e)}
            className="icon"
          />
        </p>
      </li>
    );
  });

  return (
    <div className="app">
      <div className="container">
        <h1>TO DO</h1>

        
          <input
            name="todo"
            onChange={e => setTexto(e.target.value)}
            value={texto}
            onKeyDown={addTodo}
            placeholder="No task, add a task"
          />
          {listItems}
      </div>
    </div>
  );
};
