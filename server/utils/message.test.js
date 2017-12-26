/* jshint esversion: 6 */

var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		var from = 'Andrew';
		var text = 'This is a test';
		var msg = generateMessage(from, text);

		console.log(msg);
		
		expect(msg.from).toBe('Andrew');
		expect(msg.text).toBe('This is a test');
		expect(typeof(msg.createdAt)).toBe('number');
	});
});

describe('generateLocationMessage', () => {
	it('should generate correct location object', () => {
		var from = 'Admin';
		var longitude = 1;
		var latitude = 1;
		var test = generateLocationMessage(from, longitude, latitude);

		console.log(test);

		expect(test.from).toBe('Admin');
		expect(test.url).toBe(`https://www.google.com/maps?q=${longitude},${latitude}`);
		expect(typeof(test.createdAt)).toBe('number');
	});
});