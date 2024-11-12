import { useEffect, useState } from "react"
import "./App.css"
import { TodoList } from "./components/TodoList"
import { ToDoAdd } from "./components/ToDoAdd"
import { useToDo } from "./hooks/useToDo"
import { login } from "./hooks/useLogin"
import LoginForm from "./components/LoginForm"
import CreateForm from "./components/CreateForm"

function App() {
  useEffect(() => {
    const loggedUser = JSON.parse(window.localStorage.getItem("loggedUser"))
    if (loggedUser) {
      setUser(loggedUser)
    }
  }, [])

  const {
    todos,
    todosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  } = useToDo()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const user = await login(username, password)

      window.localStorage.setItem("loggedUser", JSON.stringify(user))

      setUser(user)
      setUsername("")
      setPassword("")
    } catch (error) {
      console.error(error)
      setErrorMessage("Wrong Credentials")
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const renderCreateForm = () => {
    return (
      <div className="card-to-do">
        <h1>Lista de Tareas</h1>
        <div className="counter-todos">
          <h3>N° de Tareas: {todosCount}</h3>
          <br></br>
        </div>
        <div className="add-todo">
          <h3>Añadir Tarea</h3>
          <ToDoAdd handleNewTodo={handleNewTodo} />
        </div>
        <TodoList
          todos={todos}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
        />
      </div>
    )
  }

  return (
    <div className="App">
      {user ? (
        <CreateForm
          todos={todos}
          todosCount={todosCount}
          handleNewTodo={handleNewTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
          handleUpdateTodo={handleUpdateTodo}
        />
      ) : (
        <LoginForm
          errorMessage={errorMessage}
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleUserChange={({ target }) => setUsername(target.value)}
          handlePasswordChange={({ target }) => setPassword(target.value)}
        />
      )}
    </div>
  )
}

export default App
