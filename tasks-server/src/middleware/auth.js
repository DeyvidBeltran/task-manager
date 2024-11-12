import { verifyToken } from "../helpers/generateTokens.js"

export const checkAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ").pop()
    const tokenData = await verifyToken(token)

    if (tokenData.name) {
      next()
    } else {
      res.status(409)
      res.send({ error: "No tienes acceso" })
    }
  } catch (error) {
    res.status(409)
    res.send({ error: "No tienes acceso." })
  }
}
