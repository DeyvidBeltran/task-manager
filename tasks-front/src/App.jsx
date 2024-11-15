import { useEffect, useState } from "react"
import "./App.css"
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
