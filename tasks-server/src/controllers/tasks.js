const createTask = (req, res) => {
  // Simulamos que el backend "crea" la tarea
  console.log("Task with data created in the backend")

  res.status(200).json({ message: "Task successfully created" })
}

const getTasks = (req, res) => {
  // Simulamos que el backend "lista" las tareas
  console.log("Tasks listed from backend")

  res.status(200).json({ message: "Tasks listed correctly" })
}

const deleteTask = (req, res) => {
  // Simulamos que el backend "elimina" la tarea
  console.log(`Task with ID ${req.params.id} removed in the backend`)

  res.status(200).json({ message: "Task successfully deleted" })
}

export { createTask, getTasks, deleteTask }
