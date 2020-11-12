const request = require('supertest')
const server = require('./server')

describe('server.js module', () => {
    it('is the testing environment', () => {
      expect(process.env.DB_ENV).not.toBe('development')
      expect(process.env.DB_ENV).not.toBe('production')
      expect(process.env.DB_ENV).toBe('testing')
    })
    it('Can make a [GET] req', () => {
      return request(server).get('/')
        .expect({ api: 'up'})
        .expect('Content-Type', /json/)
        .expect('Content-Length', '12')
    })
    it('another way to do the same thing', async () => {
      const res = await request(server).get('/')
        expect(res.status).toBe(200)
        expect(res.body).toMatchObject({ api: "up" })
    })
  })
  