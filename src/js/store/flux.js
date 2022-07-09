const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      list: ["A", "B"],
    },

    actions: {
      // Use getActions to call a function within a function
      addTask: (todo) => {
        const store = getStore();

		store.list.push(todo) 
	},


      removeTodo: () => {
        // delete todos
        const store = getStore();

        console.log("task deleted");

        let filteredTodos = [...todo].filter((todo) => todo !== todo);
        setTodo(filteredTodos);

        store.list = filteredList;

        // print the store.list updated
        console.log("store.list", store.list);

        return filteredList;
      },
    },
  };
};

export default getState;
