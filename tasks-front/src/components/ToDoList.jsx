import React from "react"
import { ToDoItem } from "./ToDoItem"

export const TodoList = ({
  todos,
  handleUpdateTodo,
  handleDeleteTodo,
  handleCompleteTodo,
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
        />
      ))}
    </ul>
  )
}
