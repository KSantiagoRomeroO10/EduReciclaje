const supertest = require('supertest')
const { Server, StartServer } = require('../Server')

const api = supertest(Server)

afterAll(() => {
  StartServer.close()
})

describe('GetOneUser API', () => {
  test('Debería devolver 400 si faltan campos', async() => {
    await api
      .post('/user/getOne')
      .send({ user: "Santiago" })
      .set('Content-Type', 'application/json')
      .expect(400)
  })
})