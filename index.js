const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('hello, world');
});

app.get('/users/@:name', (req, res) => {
	res.send(`welcome! this page is ${req.params.name}'s user page!`);
});

app.listen(3000, () => {
	console.log('started!');
});
