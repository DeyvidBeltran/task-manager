import axios from "axios"

const baseUrl = "http://localhost:3000"

export const login = async (username, password) => {
  try {
    const { data } = await axios.post(`${baseUrl}/login`, {
      username,
      password,
    })

    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}
