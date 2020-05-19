const supertest = require("supertest")
const server = require("../api/server")
const db = require("../database/dbConfig")

beforeAll(async () => {
    await db('users').truncate()
  })
afterAll(async () => {
    await db.destroy()

})

describe("auth integration tests", () => {
    it("POST /register SHOULD SUCCEED", async () => {
        const data = {username: "aprilma2", password: "pass1234"}
        const res = await supertest(server).post("/api/auth/register").send(data)
        expect(res.statusCode).toBe(201)
        expect(res.type).toBe("application/json")
        expect(res.body.username).toBe("aprilma2")
    }) 

    it('POST /register SHOULD FAIL', async () => {
        const data = { username: 'aprilma2', password: 'pass1234' }
        const res = await supertest(server).post('/api/auth/register').send(data)
        expect(res.statusCode).toBe(409)
      })

    it("POST /login SHOULD SUCCEED", async () => {
        const data = {username: "aprilma2", password: "pass1234"}
        const res = await supertest(server).post("/api/auth/login").send(data)
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
    })

    it('POST /login SHOULD FAIL', async () => {
        const data = { username: 'aprilma', password: 'pass1234' }
        const res = await supertest(server).post('/api/auth/login').send(data)
        expect(res.statusCode).toBe(401)
      })
})