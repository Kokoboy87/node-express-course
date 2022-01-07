const express = require('express');
const res = require('express/lib/response');
const app = express();
const bodyParser = require('body-parse');

app.use(bodyParser.json());

const mockUserData = [{ name: 'George' }, { name: 'Jill' }];

app.get('/users', function (req, res) {
	res.json({
		success: true,
		message: 'successfully got users. Nice!',
		users: mockUserData,
	});
});

// Colons are used as variables that be viewed in the params
app.get('/users/:id', function (req, res) {
	console.log(req.params.id);
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id,
	});
});

app.post('/login', function (req, res) {
	// Typically password are encrypted using something like bcrypt before sending to database
	const username = req.body.username;
	const password = req.body.password;

	// This should come from the database
	const mockUsername = 'billyGoat';
	const mockPassword = 'SuperSecret';

	if (username === mockUsername && password === mockPassword) {
		// In practice, use JSON web token sing method here to make an encrypted token
		res.json({
			success: true,
			message: 'password and username match!',
			token: 'encrypted token goes here',
		});
	} else {
		res.json({
			success: false,
			message: 'password and username do not match',
		});
	}
});

app.listen(8000, function () {
	console.log('server is listening');
});
