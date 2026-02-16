import { test, expect, describe } from 'vitest';
import { add, subtract, multiply, divide } from './../../helpers/math.helper';

describe('Validate math helper', () => {
	test('Should add two numbers correctly',() => {
		expect(add(2, 3)).toBe(5);
	});

	test('Should subtract two numbers correctly',() => {
		expect(subtract(5, 2)).toBe(3);
	});

	test('Should multiply two numbers correctly',() => {
		expect(multiply(4, 3)).toBe(12);
	});

	test('Should divide two numbers correctly',() => {
		expect(divide(10, 2)).toBe(5);
	});
});

// describe('Validate division by zero', () => {
// 	test('Should throw an error when dividing by zero', () => {
// 		expect(divide(10, 0)).toThrow(Error);
// 	});
// });