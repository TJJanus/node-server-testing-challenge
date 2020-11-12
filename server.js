const express = require('express')

const server = express();

server.use(express.json());


server.get('/', (req , res) => {
    res.status(200).json({ api: 'up'})
})

// server.get("/users", (req, res) => { // endpoint with supertest
//     Users.getAll() // db helpers jest
//       .then(hobbits => {
//         res.status(200).json(hobbits);
//       })
//       .catch(error => {
//         res.status(500).json(error);
//       });
//   });

module.exports = server;