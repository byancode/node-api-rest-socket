import userController from '../controllers/user';
import 'express-group-routes';
import express from 'express';

export default (route) => {
	route.use(express.json());
	// ROUTES
	route.group('/user', (route) => {
		route.get('/:id', userController.profile);
	});
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
