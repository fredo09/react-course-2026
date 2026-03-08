import { describe, test, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { ItemCounter } from '../shopping-cart/ItemCounter';

describe('ItemCounter', () => {
	test('should render the initial count', () => {
		const productName = "test Item";

		render(<ItemCounter productName={productName} />);
		screen.debug();
		expect(screen.getByText(productName)).toBeDefined();
	});


	test('should render whit custom quantity', () => {
		const quantity = 10;
		render(<ItemCounter productName="test Item" quantity={quantity} />);
		screen.debug();
		expect(screen.getByText(quantity)).toBeDefined();
	});


	test('Should increment count when +1 button is clicked', () => {
		render(<ItemCounter productName="test Item"/>);
		const [buttonAdd] = screen.getAllByTestId('add-button');

		fireEvent.click(buttonAdd);

		expect(screen.getByTestId('span-count')).toBeDefined();

	});

	test('Should decrement count when -1 button is clicked', () => {
		render(<ItemCounter productName="test Item" quantity={10}/>);
		const [buttonSubtract] = screen.getAllByTestId('subtract-button');
	
		fireEvent.click(buttonSubtract);
		expect(screen.getByText('9')).toBeDefined();
	});

	test('Should increment count when +1 button is clicked', () => {
		render(<ItemCounter productName="test Item" quantity={10}/>);
		const [buttonAdd] = screen.getAllByTestId('add-button');
	
		fireEvent.click(buttonAdd);

		expect(screen.getByText('11')).toBeDefined();
	});

	test('Validate style product name "red"', () => {
		render(<ItemCounter productName="test Item" quantity={0}/>);
		const spanElement = screen.getByTestId('product-name');

		expect(spanElement.style.color).toBe('red');
	});

	test('Validate style product name "green"', () => {
		render(<ItemCounter productName="test Item" quantity={1}/>);

		const spanElement = screen.getByTestId('product-name');

		expect(spanElement.style.color).toBe('green');
	});
});