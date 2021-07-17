import _mariadb from 'mariadb';
import env from '../env';

export const pool = _mariadb.createPool({
	host: env.MARIADB_HOST,
	port: env.MARIADB_PORT,
	user: env.MARIADB_USER,
	password: env.MARIADB_PASS,
	database: env.MARIADB_NAME,
});
export const conn = await pool.getConnection();

export default {
	query() {
		console.log('hola mundo');
	},
};
