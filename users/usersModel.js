const db = require('../data/db-config')

module.exports = {
    insert,
    remove,
    getAll
  }

async function insert(user) {
    const [id] = await db('users').insert(user)
    return db('users').where({ id }).first()
}

async function remove(id) {
    return db('users').where({ id }).del()
}

function getAll() {
    return db('users');
  }
