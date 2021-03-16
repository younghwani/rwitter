import { authService, dbService } from "fbase";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

export default ({ userObj }) => {
	const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
	const history = useHistory();
	const onLogOutClick = () => {
		authService.signOut();
		history.push("/");
	};
	//filtering
	const getMyRweets = async () => {
		const rweets = await dbService
			.collection("rweets")
			.where("creatorId", "==", userObj.uid)
			.orderBy("createdAt")
			.get();
		console.log(rweets.docs.map((doc) => doc.data()));
	};
	useEffect(() => {
		getMyRweets();
	}, []);
	const onChange = (event) => {
		const {
			target: { value },
		} = event;
		setNewDisplayName(value);
	};
	const onSubmit = async (event) => {
		event.preventDefault();
		if (userObj.displayName !== newDisplayName) {
			await userObj.updateProfile({
				displayName: newDisplayName,
			});
		}
	};
	return (
		<>
			<form onSubmit={onSubmit}>
				<input
					onChange={onChange}
					type="text"
					placeholder="Display name"
					value={newDisplayName}
				/>
				<input type="submit" value="Update Profile" />
			</form>
			<button onClick={onLogOutClick}>Log Out</button>
		</>
	);
};
