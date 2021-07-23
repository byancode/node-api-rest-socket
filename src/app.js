import apiSockets from './sockets/api';
import testRoutes from './routes/test';
import express from './helpers/express';
import { Server } from 'socket.io';
import http from 'http';
import env from './env';
// CONSTANTS
const app = express();
const server = http.createServer(app);
const io = new Server(server);
// ROUTES
app.group('/api', (route) => {
	route.use(express.json());
	route.group('/test', testRoutes);
	route.all('*', function (req, res) {
		const response = {};
		response.error = {
			code: 404,
			message: 'esta api no existe !',
		};
		res.status(404).json(response);
	});
});
// WEB SOCKET
io.on('connection', (socket) => {
	apiSockets(socket);
});
// START SERVER
app.listen(env.PORT, () => {
	console.log(`Example app listening at http://localhost:${env.PORT}`);
});

export default app;
