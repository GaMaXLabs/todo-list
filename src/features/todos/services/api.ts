import { Todo } from "../models/Todo.model";
export const fetchTodos = async ( ): Promise<Array<Todo>> => {
  const response = await fetch(
    `https://garrido-todo-default-rtdb.europe-west1.firebasedatabase.app/todos.json`
  );
  const todos = new Array<Todo>();
  if (response) {
    const todosMap = await response.json();
    for (const key in todosMap) {
      const todo: Todo = {
        id: key,
        ...todosMap[key].completedDate,
        ...todosMap[key].createdDate,
        ...todosMap[key].description,
        ...todosMap[key].status,
      };

      todos.push(todo);
    }
  }
  return todos;
};

export const postTodo = async (todo: Todo) => {
  return fetch(
    `https://garrido-todo-default-rtdb.europe-west1.firebasedatabase.app/todos.json`,
    {
      body: JSON.stringify(todo),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    }
  );
};
