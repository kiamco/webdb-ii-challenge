const express = require('express');
const cors = require('cors');

const server = express();

server.use(cors());


server.get('/', (req, res) => {
    res.send(`<h1> Api is working </h1>`)
})

server.listen(8000, () => console.log('listening on port 4000'))
