import apiSockets from './sockets/api';
import apiRoutes from './routes/api';
import { Server } from 'socket.io';
import 'express-group-routes';
import express from 'express';
import http from 'http';
import env from './env';
// CONSTANTS
const app = express();
const server = http.createServer(app);
const io = new Server(server);
// ROUTES
app.group('/api', apiRoutes);
// WEB SOCKET
io.on('connection', (socket) => {
	apiSockets(socket);
});
// START SERVER
app.listen(env.PORT, () => {
	console.log(`Example app listening at http://localhost:${env.PORT}`);
});
