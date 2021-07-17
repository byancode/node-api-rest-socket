import _rethinkdb from 'rethinkdb';
import env from '../env';

export const conn = await _rethinkdb.connect({
	db: env.RETHINKDB_NAME,
	host: env.RETHINKDB_HOST,
	port: env.RETHINKDB_PORT,
	user: env.RETHINKDB_USER,
	password: env.RETHINKDB_PASS,
});

export default _rethinkdb;
