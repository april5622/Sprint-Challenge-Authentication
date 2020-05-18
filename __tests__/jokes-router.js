const supertest = require("supertest")
const server = require("../api/server")
const db = require("../database/dbConfig")


afterAll(async () => {
    await db.destroy()

})

describe("jokes integration test", () => {
    it("GET /api/jokes should FAIL", async () => {
        const res = await supertest(server).get("/")
            expect(res.statusCode).toBe(404)
           // expect(res.type).toBe("application/json")
    
    })
})
