import { body, param, CustomValidator } from 'express-validator';
import { User } from '../models';

export async function profile(req, res) {
	param('id').isInt().toInt().run(req);
	try {
		const data = await User.get(req.body.id).run();
		res.json(data);
	} catch (error) {
		res.error(error);
	}
}

export default {
	profile,
};
