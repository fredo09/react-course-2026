import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { FirstStepApp } from '../FirstStepApp';

describe('FirstStepApp', () => {
	test('should render the component', () => {
		const { container } = render(<FirstStepApp />);

		expect(container).toMatchSnapshot();
	});
});