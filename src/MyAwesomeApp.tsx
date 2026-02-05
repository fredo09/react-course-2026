import type { CSSProperties } from "react";

	const firstName = 'Freddy';
	const lastName = 'Vazqzz';

	const favoriteGames = [
		'The last of us',
		'Metal Gear',
		'Death Stranding',
		'Resident Evil'
	];

	const isActive = true;

	const address = {
		city: 'New York',
		zip: 12345,
		street: 'Main St'
	};

	const stylesComponent: CSSProperties = {
		color: 'white',
		backgroundColor: 'red',
		borderRadius: 10,
		padding: 10
	}

export const MyAwesomeApp = () => {
	return (
		<>
			{/* Imprimiendo variables */}
			<h1>{firstName}</h1>
			<h3>{lastName}</h3>

			{/* Arreglos */}
			<p>{favoriteGames.join(', ')}</p>

			{/* Operadores ternarios "Booleanos"*/}
			<h1>{isActive ? 'Active User' : 'Inactive User'}</h1>

			{/* Objetos */}
			<p
				style={stylesComponent}>
				{JSON.stringify(address, null, 2)}
			</p>
		</>
	)
}
