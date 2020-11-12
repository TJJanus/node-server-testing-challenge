require('dotenv').config();

const server = require('./server');

const port = process.env.PORT || 6100;
server.listen(port, () => console.log(`\n** server up on port ${port} **\n`));