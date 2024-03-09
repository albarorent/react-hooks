import { useEffect, useReducer, useState } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
  const todosString = localStorage.getItem("todos");
  const todosF = todosString ? JSON.parse(todosString) : [];
  return todosF;
};

export const useTodo = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos) || []);
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatchTodo(action);
  };

  const handleDeleteTodo = (id) => {
    dispatchTodo({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatchTodo({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };

  return {
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
  };
};
