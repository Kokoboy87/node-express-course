const express = require('express');
const res = require('express/lib/response');
const app = express();

const mockUserData = [{ name: 'George' }, { name: 'Jill' }];

app.get('/users', function (req, res) {
	res.json({
		success: true,
		message: 'successfully got users. Nice!',
		users: mockUserData,
	});
});

app.get('/users/:id', function (req, res) {
	console.log(req.params.id);
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id,
	});
});

app.listen(8000, function () {
	console.log('server is listening');
});
