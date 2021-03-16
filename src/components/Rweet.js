import { dbService } from "fbase";
import React, { useState } from "react";

const Rweet = ({ rweetObj, isOwner }) => {
	const [editing, setEditing] = useState(false);
	const [newRweet, setNewRweet] = useState(rweetObj.text);
	const onDeleteClick = async () => {
		const ok = window.confirm(
			"Are you sure you want to delete this rweet?"
		);
		if (ok) {
			await dbService.doc(`rweets/${rweetObj.id}`).delete();
		}
	};
	const toggleEditing = () => setEditing((prev) => !prev);
	const onSubmit = async (event) => {
		event.preventDefault();
		await dbService.doc(`rweets/${rweetObj.id}`).update({
			text: newRweet,
		});
        setEditing(false);
	};
	const onChange = (event) => {
		const {
			target: { value },
		} = event;
		setNewRweet(value);
	};
	return (
		<div>
			{editing ? (
				<>
					<form onSubmit={onSubmit}>
						<input
							type="text"
							placeholder="Edit your rweet"
							value={newRweet}
							required
							onChange={onChange}
						/>
						<input type="submit" value="Update Rweet" />
					</form>
					<button onClick={toggleEditing}>Cancel</button>
				</>
			) : (
				<>
					<h4>{rweetObj.text}</h4>
					{isOwner && (
						<>
							<button onClick={onDeleteClick}>
								Delete Rweet
							</button>
							<button onClick={toggleEditing}>Edit Rweet</button>
						</>
					)}
				</>
			)}
		</div>
	);
};

export default Rweet;
