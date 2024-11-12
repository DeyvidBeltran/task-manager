import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import loginRoutes from "./src/routes/auth.js"
import tasksRoutes from "./src/routes/tasks.js"

const app = express()
app.use(
  cors({
    origin: "*", // Permitir todos los orígenes
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "Authorization",
    ],
  })
)

app.use(bodyParser.json())

// Routes
app.use("/login", loginRoutes)
app.use("/tasks", tasksRoutes)

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})

export default app
