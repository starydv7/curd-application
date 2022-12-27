import React from "react";
import TodoItem from "./TodoItem";

const Todos = ({ todos, markComplete, delTodo,editTodo }) => {
  return todos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      markComplete={markComplete}
          delTodo={delTodo}
          editTodo={editTodo}
    />
  ));
};

export default Todos;
