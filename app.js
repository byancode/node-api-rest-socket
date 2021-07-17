import { Server } from 'socket.io';
import routes from './src/routes';
import 'express-group-routes';
import express from 'express';
import env from './src/env';
import http from 'http';
// CONSTANTS
const app = express();
const server = http.createServer(app);
const io = new Server(server);
const port = 3000;
// ROUTES
app.group('/api', routes);
// WEB SOCKET
io.on('connection', (socket) => {
	console.log('a user connected');
});
// START SERVER
app.listen(3000, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
