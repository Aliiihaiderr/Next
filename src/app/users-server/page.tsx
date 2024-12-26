
type user = {
	id: number;
	name: string;
	username: string;
	phone: string;
	email: string;
};

export default async function UsersServer() {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const users: user[] = await res.json();

	return (
		<ul>
			{users.map((user) => (
				<li key={user.id}>
					{user.name}
					{user.phone}
				</li>
			))}
		</ul>
	);
}
