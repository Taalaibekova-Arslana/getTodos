import React, { useEffect, useState } from "react";

const App = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		getTodos();
	}, []);

	const getTodos = async () => {
		try {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/posts`
			);
			const responseData = await response.json();
			setPosts(responseData);
		} catch (e) {
			console.error("Backend upal", e);
		}
	};
	return (
		<div>
			{posts.map((item) => (
				<div key={item.id}>
					<h1>{item.name}</h1>
					<p>{item.body}</p>
				</div>
			))}
		</div>
	);
};

export default App;
