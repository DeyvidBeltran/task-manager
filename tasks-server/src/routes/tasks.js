import express from "express"
import { checkAuth } from "../middleware/auth.js"
import { createTask, deleteTask, getTasks } from "../controllers/tasks.js"

const router = express.Router()

router.post("/", createTask)

router.get("/", checkAuth, getTasks)

router.delete("/:id", checkAuth, deleteTask)

export default router
