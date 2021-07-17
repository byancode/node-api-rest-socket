import rethinkdb, { conn } from '../database/rethinkdb';
import mariadb from '../database/mariadb';
import env from '../env';

export default {
	async drivers() {
		try {
			const res = await rethinkdb.table('drivers').run(conn);
			return Promise.resolve(await res.toArray());
		} catch (error) {
			return Promise.reject(error);
		}
	},
	async driver(id) {
		try {
			const res = await rethinkdb.table('drivers').get(id).run(conn);
			if (res !== null) {
				return Promise.resolve(await res.toArray());
			} else {
				throw 'No exists in database';
			}
		} catch (error) {
			return Promise.reject(error);
		}
	},
};
