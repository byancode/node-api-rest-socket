export default (socket) => {
	socket.on('message', (data) => {
		console.log(data);
	});
};
