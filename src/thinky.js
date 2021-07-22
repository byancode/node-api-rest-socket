import _thinky from 'thinky';
import env from './env';

export const thinky = _thinky({
	db: env.DB_NAME,
	host: env.DB_HOST,
	port: env.DB_PORT,
	user: env.DB_USER,
	password: env.DB_PASS,
});

export const r = thinky.r;
export const type = thinky.type;
