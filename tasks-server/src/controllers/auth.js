import { tokenSign } from "../helpers/generateTokens.js"

// Datos de usuario en memoria
const users = [
  { username: "admin", password: "admin123" },
  { username: "user", password: "user123" },
]
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body

    console.log(`Login attempt for user ${username}`)

    // Buscar al usuario en memoria
    const user = users.find(
      (user) => user.username === username && user.password === password
    )

    const tokenSession = await tokenSign(username)

    if (tokenSession && user) {
      res.json({
        username: user.username,
        password: user.password,
        token: tokenSession,
      })
    } else {
      res.status(401).json({ message: "Invalid credentials" })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Internal server error" })
  }
}

export default loginUser
