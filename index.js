const express = require('express');
const request = require('request');
const cors = require('cors');

express.urlencoded({ extended: true});

const app = express();
const PORT = process.env.PORT || 8888;

app.get('/', (req, res) => {
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello, world! [logging sample]');
}).listen(process.env.PORT);
});

app.get('/file', (req, res) => {
	request
	.get(req.query.url)
	.on('error', (error) => res.status(500).end())
	.pipe(res)
});

app.listen(PORT, () => console.log(`   
DA
SERVER
IS
ONLINE
`));