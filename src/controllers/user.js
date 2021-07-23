import { param } from 'express-validator';
import { User } from '../models';

export async function index(req, res, next) {
	try {
		const data = await User.run();
		res.json(data);
	} catch (error) {
		next(error);
	}
}

export async function profile(req, res, next) {
	param('id').isInt().toInt().run(req);
	try {
		const data = await User.get(req.body.id).run();
		res.json(data);
	} catch (error) {
		next(error);
	}
}

export default {
	profile,
	index,
};
