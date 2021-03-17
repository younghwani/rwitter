import { authService, dbService } from "fbase";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

export default ({ refreshUser, userObj }) => {
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
		//console.log(rweets.docs.map((doc) => doc.data()));
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
			refreshUser();
		}
	};
	return (
		<div className="container">
			<div className="profilePhoto">
				{userObj.photoURL && (
					<img src={userObj.photoURL}/>
				)}
			</div>
			<form onSubmit={onSubmit} className="profileForm">
				<input
					onChange={onChange}
					type="text"
					autoFocus
					placeholder="Display name"
					value={newDisplayName}
					className="formInput"
				/>
				<input
					type="submit"
					value="Update Profile"
					className="formBtn"
					style={{ marginTop: 10 }}
				/>
			</form>
			<span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
				Log Out
			</span>
		</div>
	);
};
