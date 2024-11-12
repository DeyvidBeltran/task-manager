import { ToDoAdd } from "./ToDoAdd"
import { TodoList } from "./TodoList"

export default function CreateForm({
  todos,
  todosCount,
  handleNewTodo,
  handleDeleteTodo,
  handleCompleteTodo,
  handleUpdateTodo,
}) {
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
