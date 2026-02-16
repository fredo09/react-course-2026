import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { MyAwesomeApp } from '../MyAwesomeApp';

describe('MyAwesomeApp', () => {
	test('Should render firstName and lastName', () => {
		const { container } = render(<MyAwesomeApp />);
		//! muestra el HTML completo de forma mas legible
		//screen.debug();
		// console.log("🚀 ~ content_log:", container);

		const h1 = container.querySelector('h1');
		const h3 = container.querySelector('h3');
			
		expect(h1?.innerHTML).toBe("Freddy");
		expect(h3?.innerHTML).toContain('Vazqzz');
	});

	test('Should render firstName and lastName - screen', () => {
		render(<MyAwesomeApp/>);
		screen.debug();

		// const h1 = screen.getByRole('heading', {
		// 	level: 1
		// });

		const h1 = screen.getByTestId('first-name');
		expect(h1?.innerHTML).toContain('Freddy');
	});
});