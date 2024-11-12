import React from "react"
import { TiDelete } from "react-icons/ti"
import { ToDoUpdate } from "./ToDoUpdate"

export const ToDoItem = ({ todo, handleUpdateTodo, handleDeleteTodo }) => {
  const { token } = JSON.parse(localStorage.getItem("loggedUser"))

  return (
    <li>
      <span>
        <label htmlFor="" className="container-done"></label>
      </span>
      <ToDoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />
      <button
        className="btn-delete"
        onClick={() => handleDeleteTodo(todo.id, token)}>
        <TiDelete />
      </button>
    </li>
  )
}
