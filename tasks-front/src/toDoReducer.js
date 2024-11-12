export const toDoReducer = (initialState, action) => {
  switch (action.type) {
    case "Add":
      return [...initialState, action.payload]
    case "Delete":
      return initialState.filter((toDo) => toDo.id !== action.payload)
    case "Complete":
      return initialState.map((toDo) =>
        toDo.id === action.payload ? { ...toDo, done: !toDo.done } : toDo
      )
    case "Update":
      return initialState.map((toDo) =>
        toDo.id === action.payload.id
          ? {
              ...toDo,
              title: action.payload.title,
              description: action.payload.description,
            }
          : toDo
      )
    default:
      return initialState
  }
}
