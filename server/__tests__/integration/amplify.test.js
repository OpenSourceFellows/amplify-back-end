require('dotenv').config()
const app = require('../../app')
const request = require('supertest')

afterEach(() => {
    jest.clearAllMocks()
})

describe('/api/amplify/:zipcode', () => {
    const zipcode = '92107'
    const route = '/api/amplify/' + zipcode
    test('returns 200 status', async () => {
        const response = await request(app).get(route)
        expect(response.status).toBe(200)
    })
})

describe('/api/amplify/', () => {
    const route = '/api/amplify/'
    test('returns 200 status', async () => {
        const response = await request(app).get(route)
        expect(response.status).toBe(200)
    })
})

describe('/api/auth/unlocked', () => {
    const route = '/api/auth/unlocked'
    test('returns 200 status', async () => {
        const response = await request(app).get(route)
        expect(response.status).toBe(200)
    })
})

// describe("/api/auth/locked", () => {
// const route = "/api/auth/locked"
//     test("returns 404 status, when ", async () => {
//         const response = await request(app)
//         .get(route)
//         expect(response.status).toBe(404);
//     });
// })
