import users from './routes/user';
import express from 'express';
import 'express-group-routes';

export default (route) => {
	// INITIALIZE
	route.use(express.json());
	// ROUTES
	route.group('/user', users);
	// DEFAULT RESPONSE
	route.get('*', function (req, res) {
		const response = {};
		response.error = {
			code: 404,
			message: 'Pagina no existe !',
		};
		res.json(response);
	});
};
