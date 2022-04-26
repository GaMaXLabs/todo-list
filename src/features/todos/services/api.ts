import { FirebaseAddedDocument } from "../models/FirebaseAddedDocument.model";
import { Todo } from "../models/Todo.model";
export const fetchTodos = async (): Promise<Array<Todo>> => {
  const response = await fetch(
    `https://garrido-todo-default-rtdb.europe-west1.firebasedatabase.app/todos.json`
  );
  const todos = new Array<Todo>();
  if (response) {
    const todosMap = await response.json() as { [key: string]: Todo };
    for (const key in todosMap) {
      const todo: Todo = {
        ...todosMap[key], id: key,
      };
      todos.push(todo);
    }
  }
  return todos;
};

export const postTodo = async (todo: Todo): Promise<Todo> => {
  todo.id = null;
  const response = await fetch(
    `https://garrido-todo-default-rtdb.europe-west1.firebasedatabase.app/todos.json`,
    {
      body: JSON.stringify(todo),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    }
  );
  const addedTaskObj = await response.json() as FirebaseAddedDocument;
  todo.id = addedTaskObj.name
  return todo;
};

export const updateTodo = async (todo: Todo): Promise<Todo> => {
  await fetch(
    `https://garrido-todo-default-rtdb.europe-west1.firebasedatabase.app/todos/${todo.id}/.json`,
    {
      body: JSON.stringify(todo),
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    }
  );
  return todo;
};

export const deleteTodo = async (todo: Todo): Promise<Todo> => {
  await fetch(
    `https://garrido-todo-default-rtdb.europe-west1.firebasedatabase.app/todos/${todo.id}/.json`,
    {
      body: JSON.stringify(todo),
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }
  );
  return todo;
};