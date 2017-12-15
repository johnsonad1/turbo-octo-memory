/* jshint esversion: 6 */

var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		var from = 'Andrew';
		var text = 'This is a test';
		var msg = generateMessage(from, text);
		
		expect(msg.from).toBe('Andrew');
		expect(msg.text).toBe('This is a test');
		expect(typeof(msg.createdAt)).toBe('number');
	});
});