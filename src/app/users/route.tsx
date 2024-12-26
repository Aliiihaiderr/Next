
export const users = [
	{
		id: 1,
		name: "Ali",
	},
	{
		id: 2,
		name: "Haider",
	},
];

export async function GET() {
	return Response.json(users);
}

export async function POST(response: Response) {
	const user = await response.json();
	const newUser = {
		id: users.length + 1,
		name: user.name,
	};
	users.push(newUser);
	return new Response(JSON.stringify(newUser) , {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201,
    });
}
