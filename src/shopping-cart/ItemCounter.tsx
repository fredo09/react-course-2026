import { useState } from "react";

import './ItemCounter.css';

interface ItemCounterProps {
	productName: string;
	quantity?: number;
}

export const ItemCounter = ({
	productName,
	quantity = 0
}: ItemCounterProps) => {
	const [count, setCount] = useState(quantity);

	const handleClickAdd = () => {
		setCount(count + 1);
	}

	const handleClickSubtract = () => {
		setCount(count > 0 ? count - 1 : 0);
	}

	return (
		<section
			className="itemRowLinst">

			{/* Buttons and counter will go here */}
			<span data-testid="product-name" className="itemColor" style={{
				color: count > 0 ? 'green' : 'red'
			}}>{productName}</span>

			<button data-testid="subtract-button" onClick={handleClickSubtract}>-1</button>

			<span data-testid="span-count" style={{fontWeight: 'bold'}}>{count || 0}</span>

			<button data-testid="add-button" onClick={handleClickAdd}>+1</button>
		</section>
	)
}
