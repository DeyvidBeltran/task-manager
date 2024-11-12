import React, { useRef, useState } from "react"
import { TiEdit } from "react-icons/ti"
import { useForm } from "../hooks/useForm"

export const ToDoUpdate = ({ todo, handleUpdateTodo }) => {
  const { updateTitle, updateDescription, onInputChange } = useForm({
    updateDescription: todo.description,
    updateTitle: todo.title,
  })

  const [disabled, setDisabled] = useState(true)
  const focusInputRef = useRef()

  const onSubmitUpdate = (e) => {
    e.preventDefault()

    const id = todo.id
    const title = updateTitle
    const description = updateDescription

    handleUpdateTodo(id, description, title)

    setDisabled(!disabled)

    focusInputRef.current.focus()
  }

  return (
    <form action="" onSubmit={onSubmitUpdate}>
      <input
        type="text"
        className="input-update"
        name="updateTitle"
        value={updateTitle}
        onChange={onInputChange}
        placeholder="Título"
        readOnly={disabled}
        ref={focusInputRef}
      />
      <input
        type="text"
        className="input-update"
        name="updateDescription"
        value={updateDescription}
        onChange={onInputChange}
        placeholder="Descripcion"
        readOnly={disabled}
        ref={focusInputRef}
      />
      <button type="submit" className="btn-edit">
        <TiEdit />
      </button>
    </form>
  )
}
