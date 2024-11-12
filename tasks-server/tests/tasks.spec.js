import request from "supertest"
import app from "../index.js"

describe("Login route", () => {
  it("should return a token when credentials are correct", async () => {
    const response = await request(app).post("/login").send({
      username: "admin",
      password: "admin123",
    })
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("token")
  })

  it("should return an error when credentials are incorrect", async () => {
    const response = await request(app).post("/login").send({
      username: "wrong",
      password: "wrong",
    })
    expect(response.status).toBe(401)
    expect(response.body).toHaveProperty("message", "Invalid credentials")
  })
})
