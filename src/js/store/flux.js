const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      list: ["Do my hair", "Paint my nails"],
    },

    actions: {
      // Use getActions to call a function within a function
      addTask: (index, todo) => {
        const store = getStore();

        store.list.push(todo);

        return store.list;
      },

      removeTodo: (todo) => {
        // delete todos
        const store = getStore();

        console.log("task deleted", todo);

        function removeTodoAfter(task) {
          return task != todo;
        }
        const filteredList = store.list.filter(removeTodoAfter);

        store.list = filteredList;

        return filteredList;
      },
    },
  };
};

export default getState;
