import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { FirstStepApp } from '../FirstStepApp';

/**
 * Simulacion de una dependencia para este caso es un componente que se llama ItemCounter, lo que hacemos es simularlo para que no afecte a nuestras pruebas, esto es util cuando el componente tiene una logica compleja o consume recursos externos, de esta manera podemos aislar el componente que queremos probar y evitar que las pruebas fallen por problemas en la dependencia.
 */
vi.mock('./../shopping-cart/ItemCounter.tsx',  () => ({
	ItemCounter: () => <div data-testId="item-counter"/>,
}));

describe('FirstStepApp', () => {
	test('should render the component', () => {
		const { container } = render(<FirstStepApp />);

		// ayuda a validar que el componente no cambie, si cambia, la prueba falla 
		expect(container).toMatchSnapshot();
	});

	test('Should render rthe correct number of ItemContainer components', () => {
		render(<FirstStepApp/>);
		screen.debug();

		const itemCounterElements = screen.getAllByTestId('item-counter');
		expect(itemCounterElements.length).toBe(3);
	});
});