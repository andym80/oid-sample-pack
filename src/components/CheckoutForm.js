import React, { useState } from 'react';

function CheckoutForm() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [address, setAddress] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		// Send the form data to the server

		// Clear the form



	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
			</label>
			<br />
			<label>
				Email:
				<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
			</label>
			<br />
			<label>
				Address:
				<textarea value={address} onChange={(e) => setAddress(e.target.value)} />
			</label>
			<br />
			<button type="submit">Checkout</button>
		</form>
	);
}

export default CheckoutForm;

