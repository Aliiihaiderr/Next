"use client";

import React from "react";

export default function MockUserClient({ id }: { id: number }) {
	const handleClick = async () => {
		try {
			const response = await fetch(
				`https://676cf40b0e299dd2ddfdf02e.mockapi.io/users/${id}`,
				{
					method: "DELETE",
				}
			);
			if (response.ok) {
				window.location.reload();
				alert(`Item with ID ${id} deleted successfully!`);
			} else {
				alert(`Failed to delete item with ID ${id}`);
			}
		} catch (error) {
			console.error("Error deleting item:", error);
		}
	};

	return (
		<button
			className="dltBtn"
			onClick={handleClick}
		>
			X
		</button>
	);
}
