import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

const tokenSign = async (user) => {
  try {
    return jwt.sign(
      {
        name: user,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    )
  } catch (error) {
    return error
  }
}

const verifyToken = async (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET)
  } catch (error) {
    return error
  }
}

const decodeSign = (token) => {
  return jwt.decode(token, null)
}

export { tokenSign, verifyToken, decodeSign }
