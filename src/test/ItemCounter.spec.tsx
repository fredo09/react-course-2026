import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

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
});