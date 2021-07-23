import request from 'supertest';
import app from '../src/app';

describe('GET /api', () => {
	it('should return 200 OK', () => {
		return request(app).get('/api/test').expect(200);
	});

	it('should return 200 OK', (done) => {
		request(app)
			.get('/api/test/user/list')
			.expect('Content-Type', /\/json/)
			.expect(200)
			.then((response) => {
				const isArray = Array.isArray(response.body);
				expect(isArray).toBeTruthy();
				done();
			})
			.catch((err) => done(err));
	});
});
