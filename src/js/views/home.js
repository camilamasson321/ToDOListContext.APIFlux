import React from "react";
import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
	</div>
);

const listItems = props.taskList.map((item, index) => {
		return (
		  <li key={index} 
		  className="d-flex flex-row justify-spacing-between"
		  onClick={e => deleteTask(e)}
		  >
			{item}
			<span
			  type="button"
			  className="delete-button"
			>
			  <i className="fas fa-times"></i>
			</span>
		  </li>
		);
		});

return (
    <div className="app">
      <div className="container">
        <h1></h1>

        <form onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="No task, add a task"
            onFocus={(e) => (e.target.placeholder = "")}
            type=""
          />
        </form>
        <ul className="todotext">
          {todo.map((task, index) => {
            return (
              <li className="theList" key={index}>
                <p className="taskwords">
                  {task.text} </p>
                  <p className="deletebutton"><AiOutlineClose
                    onClick={() => deleteTodo(task.id)}
                    className="icon"
                  />
                </p>
              </li>
            );
          })}
        </ul>
      </div>
  </div>
)
