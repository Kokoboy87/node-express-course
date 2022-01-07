const express = require('express');
const res = require('express/lib/response');
const app = express();

const mockUserData = [{ name: 'Mark' }, { name: 'Jill' }];

app.get('/users', function () {
	res.json({
		success: true,
		message: 'successfully got users. Nice!',
		USERS: mockUserData,
	});
});

app.listen(8000, function () {
	console.log('server is running');
});
