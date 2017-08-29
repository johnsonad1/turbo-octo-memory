/* jshint esversion: 6 */

let socket = io();

socket.on('connect', function () {
	console.log('Connected to server');

	socket.emit('createMessage', {
		from: 'Layla',
		text: 'Hi there, sexy ;)'
	});
});

socket.on('disconnect', function () {
	console.log('Disconnected from server');
});

socket.on('newMessage', function (data) {
	console.log('New message:', data);
});