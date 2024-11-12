import React from "react"
import { useForm } from "../hooks/useForm"

export const ToDoAdd = ({ handleNewTodo }) => {
  const { title, description, onInputChange, onResetForm } = useForm({
    description: "",
    title: "",
  })

  const onFormSubmit = (e) => {
    e.preventDefault()
    if (description.trim().length <= 1) return

    let newTodo = {
      id: new Date().getTime(),
      title: title,
      description: description,
      done: false,
    }

    const { token } = JSON.parse(localStorage.getItem("loggedUser"))

    handleNewTodo(newTodo, token)

    onResetForm()
  }

  return (
    <form action="" onSubmit={onFormSubmit}>
      <input
        type="text"
        className="input-add"
        name="title"
        value={title}
        placeholder="Título"
        onChange={onInputChange}
      />
      <input
        type="text"
        className="input-add"
        name="description"
        value={description}
        placeholder="Descripción"
        onChange={onInputChange}
      />
      <button type="submit" className="btn-add">
        Agregar
      </button>
    </form>
  )
}
