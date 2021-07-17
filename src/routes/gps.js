import rethinkdb, { conn } from '../database/rethinkdb';
import db from '../helpers/database';

rethinkdb
	.table('gps')
	.changes()
	.run(conn)
	.then((cursor) => {
		cursor.each(async (error, feed) => {
			if (error) {
				return;
			}
			const data = feed.new_val;
			rethinkdb
				.table('gps')
				.get(data.id)
				.update({
					location: data.location,
				})
				.run(conn);
		});
	});
export default (route) => {
	route.post('/tracker', async (req, res) => {
		try {
			await db.gps.tracker(req.body);
			res.json({});
		} catch (err) {
			res.status(400).json({ error: true, message: 'Algo esta mál!' });
		}
	});
};
