import { revalidatePath } from "next/cache";
import MockUserClient from "../client-mockUser/page";

type MockUser = {
	id: number;
	name: string;
};

export default async function MockUsers() {
	const res = await fetch("https://676cf40b0e299dd2ddfdf02e.mockapi.io/users");
	const data: MockUser[] = await res.json();

    async function addUser(formData:FormData) {
        "use server"
        const name = formData.get("name");
        const res = await fetch("https://676cf40b0e299dd2ddfdf02e.mockapi.io/users" , {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name})
        })

        const newUser = await res.json();
        revalidatePath("/mock-users")
        console.log(newUser)
    }

	return (
		<div>
			<div className="input-div">
				<form action={addUser} className="myForm">
					<input
						type="text"
						name="name"
						required
						className="myInput"
					/>
					<button type="submit">Add User</button>
				</form>
			</div>
			<div className="users-div">
				{data.map((user) => (
					<div
						key={user.id}
						className="myUser"
					>
                        <MockUserClient id={user.id} />
						{user.name}
					</div>
				))}
			</div>
		</div>
	);
}
