import { useState } from "react"

export const useForm = (intialForm = {}) => {
  const [formState, setFormState] = useState(intialForm)

  const onInputChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const onResetForm = () => {
    setFormState(intialForm)
  }

  return { ...formState, formState, onInputChange, onResetForm }
}
