import userController from '../controllers/user';

export default (route) => {
	route.get('/', (req, res) => {
		res.json({
			Hello: 'World!',
		});
	});
	route.group('/user', (route) => {
		route.get('/list', userController.index);
		route.get('/:id', userController.profile);
	});
};
