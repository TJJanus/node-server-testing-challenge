const User = require('../users/usersModel')
const db = require('../data/db-config')

beforeEach(async () => {
    await db('users').truncate()
  })

  describe('users model', () => {

      describe('getAll()', () => {

        it('gets all the users', async () => {
            await db('users').insert({ name: 'Justin' })
            let users = await User.getAll()
            expect(users).toHaveLength(1)

            await db('users').insert({ name: 'Zach' })
            users = await User.getAll()
            expect(users).toHaveLength(2)
        })

      })

      describe('creating a user insert()', () => {
          
        it('can insert a new user', async () => {
            await User.insert({ name: 'Lisa' })
            let users = await db('users')
            expect(users).toHaveLength(1)

            await User.insert({ name: 'Jay' })
            users = await db('users')
            expect(users).toHaveLength(2)
        })

        it('can give back the new user', async () => {
            const lisa = await User.insert({ name: "Lisa" })
            expect(lisa).toMatchObject({ id: 1, name: 'Lisa' })
            const gaffer = await User.insert({ name: "Eric" })
            expect(gaffer).toMatchObject({ id: 2, name: 'Eric' })
        })

      })

      describe('can delete a user from db', () => {
          it('can remove a user', async () => {
              await db('users').insert({ name: "TJ" })
              await User.remove(1)
              let users = await db('users')
              expect(users).toHaveLength(0)

          })
      })
  })
  