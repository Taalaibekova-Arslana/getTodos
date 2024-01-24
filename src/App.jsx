import React, { useEffect, useState } from "react";

const App = () => {
	const [userId, setUserId] = useState(1);

	useEffect(() => {
		getTodos();
	}, [userId]);

	const getTodos = async () => {
		try {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/todos/${userId}`
			);
			const responseData = await response.json();
			console.log(responseData);
		} catch (e) {
			console.error("Backend upal", e);
		}
	};
	return (
		<div>
			<input
				type="number"
				value={userId}
				onChange={(e) => setUserId(e.target.value)}
			/>
			{/* <button onClick={getTodos}>getTodos</button> */}
		</div>
	);
};

export default App;
