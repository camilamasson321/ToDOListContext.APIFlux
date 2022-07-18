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
    const newList = actions.addTask(input);
    setTodoList(newList);
  }
  function removeTodo(input) {
    // console.log("handleDeleteTask task",task)

    //we use the actions from flux.js
    setTodoList(actions.removeTodo(input));
  }
  return (
    <Context.Provider
      value={{ todoList, texto, addTodo, setTodoList, setTexto }}
    >
      <ToDos />
    </Context.Provider>
  );
};

const ToDos = () => {
  const props = useContext(Context);
  console.log("Coming from Context.Provider: ", props); // In this line we are printing in the console the values received from the Context.Provider
  const [inputValue, setInputValue] = useState(""); //the string we write gets store in this variable

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const passNewTask = (e) => {
    if (e.key === "Enter") {
      props.addTodo(inputValue);
      setInputValue("");
    }
  };

  function deleteTask(e) {
    console.log("e from delete", e.target.outerText);
    removeTodo(e.target.outerText);
  }

  // console.log("todoList5555####", todoList);
  const listItems = props.todoList.map((item, index) => {
    return (
      <li
        key={index}
        className="d-flex flex-row justify-spacing-between"
        onClick={(e) => deleteTask(e)}
      >
        {item}
        <p className="deletebutton">
          <AiOutlineClose onClick={(e) => removeTodo(e)} className="icon" />
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
          onChange={handleChange}
          value={inputValue}
          onKeyDown={passNewTask}
          placeholder="No task, add a task"
        />
        <ul>{listItems}</ul>
      </div>
    </div>
  );
};
