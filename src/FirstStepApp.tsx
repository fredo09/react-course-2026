import { ItemCounter } from "./shopping-cart/ItemCounter";

interface itemsInCarI {
	productName: string;
	quantity: number;
}

const itemsInCart: itemsInCarI[] = [
	{
		productName: "Nintendo Switch 2",
		quantity: 10
	},
	{
		productName: "Nintendo Switch ",
		quantity: 5
	},
	{
		productName: "Play Station 5 Pro",
		quantity: 1
	}
];

export const FirstStepApp = () => {
  return (
	<>
		<h1>First Step App</h1>
		<p>Esto es un parrafo!!</p>
		<button>Click me!</button>

		<div>
			<h2>Hola!! dentro de un div</h2>
		</div>


		<h3>Carrito de compras</h3>
		{/* <ItemCounter productName="Nintendo Switch 2" quantity={10}/>
		<ItemCounter productName="Nintendo Switch " quantity={5}/>
		<ItemCounter productName="Play Station 5 Pro" quantity={1}/> */}

		{
			itemsInCart.map(({ productName, quantity }) => (
				<ItemCounter
					key={productName}
					productName={productName} 
					quantity={quantity}
				/>
			))
		}
	</>
  )
}
