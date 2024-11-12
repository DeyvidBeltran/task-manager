import { useEffect, useReducer } from "react"
import { toDoReducer } from "../toDoReducer"
import axios from "axios"

export const useToDo = () => {
  const initialState = []

  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || initialState
  }

  const [todos, dispatch] = useReducer(toDoReducer, initialState, init)

  const todosCount = todos.length
  const completedTodos = todos.filter((todo) => todo.done).length
  const pendingTodos = todosCount - completedTodos

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const handleNewTodo = async (todo, token) => {
    try {
      // Enviar solicitud POST al backend
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      const response = await axios.post(
        "http://localhost:3000/tasks",
        todo,
        config
      )
      console.log("Response - ", response.data) // Mensaje de éxito del backend

      const action = {
        type: "Add",
        payload: todo,
      }
      dispatch(action)
    } catch (error) {
      console.error("Error al agregar la tarea:", error)
    }
  }

  const handleDeleteTodo = async (id, token) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      // Enviar solicitud DELETE al backend
      const response = await axios.delete(
        `http://localhost:3000/tasks/${id}`,
        config
      )
      console.log("Response - ", response.data.message) // Mensaje de éxito del backend

      // Eliminar la tarea de localStorage y actualizar el estado
      const action = {
        type: "Delete",
        payload: id,
      }
      dispatch(action)
    } catch (error) {
      console.error("Error al eliminar la tarea:", error)
    }
  }

  const handleCompleteTodo = async (id) => {
    try {
      const action = {
        type: "Complete",
        payload: id,
      }
      dispatch(action)
    } catch (error) {
      console.error("Error al actualizar la tarea:", error)
    }
  }

  const handleUpdateTodo = (id, description, title) => {
    const action = {
      type: "Update",
      payload: {
        id,
        description,
        title,
      },
    }
    dispatch(action)
  }

  return {
    todos,
    todosCount,
    completedTodos,
    pendingTodos,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  }
}
