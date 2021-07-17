import { param, validationResult } from 'express-validator';
import db from '../helpers/database';
export default (route) => {
	route.get('/list', async (req, res) => {
		try {
			const result = await db.drivers.list();
			res.json(
				result.map(({ id, name, phone }) => ({
					id,
					name,
					phone,
				}))
			);
		} catch (err) {
			res.status(400).json({ error: true, message: 'Algo esta mál!' });
		}
	});
	route.get('/:id', param('id').isInt().withMessage('debe ser numerico entero').toInt(), (req, res) => {
		try {
			validationResult(req).throw();
			db.drivers.find(req.param('id')).then(({ id, name, balance }) => {
				res.json({ id, name, balance });
			});
		} catch (error) {
			res.status(400).json(error);
		}
	});
};
