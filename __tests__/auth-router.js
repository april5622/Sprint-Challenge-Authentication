const supertest = require("supertest")
const server = require("../api/server")
const db = require("../database/dbConfig")


afterAll(async () => {
    await db.destroy()

})

describe("auth integration tests", () => {
    it("POST /register SHOULD FAIL", async () => {
        const data = {username: "aprilma2", password: "pass1234"}
        const res = await supertest(server).post("/register").send(data)
        expect(res.statusCode).toBe(404)
        //expect(res.type).toBe("application/json")
        //expect(res.body.username).toBe("aprilma2")
    })

    it("POST /login SHOULD FAIL", async () => {
        const data = {username: "aprilma2", password: "pass1234"}
        const res = await supertest(server).post("/login").send(data)
        expect(res.statusCode).toBe(404)
    })
})