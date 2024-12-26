"use client"
import { useState, useEffect } from "react";

type user = {
	id: number;
	name: string;
	username: string;
	phone: string;
	email: string;
};

export default function UsersClient() {
	const [user, setUser] = useState<user[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		async function fetchUsers() {
			try {
				const response = await fetch(
					"https://jsonplaceholder.typicode.com/users"
				);
				if (!response.ok) {
					throw new Error("Failed to fetch users");
				}
				const users = await response.json();
				setUser(users);
			} catch (error) {
				setError("Failed to fetch users");
				if (error instanceof Error) {
					setError(`Failed to fetch users: ${error.message}`);
				}
			} finally {
				setLoading(false);
			}
		}
		fetchUsers();
	}, []);

    if(loading) return <h1>Loading....</h1>
    if(error) return <h1>{error}</h1>

	return (
		<ul>
			{user.map((user) => (
				<li key={user.id}>
					{user.name}
					({user.email})
				</li>
			))}
		</ul>
	);
}
