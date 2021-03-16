import { dbService } from "fbase";
import React, { useEffect, useState } from "react";

const Home = ({ userObj }) => {
	const [rweet, setRweet] = useState("");
	const [rweets, setRweets] = useState([]);
	useEffect(() => {
		dbService.collection("rweets").onSnapshot((snapshot) => {
			const rweetArray = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setRweets(rweetArray);
		});
	}, []);
	const onSubmit = async (event) => {
		event.preventDefault();
		await dbService.collection("rweets").add({
			text: rweet,
			createdAt: Date.now(),
			creatorId: userObj.uid,
		});
		setRweet("");
	};
	const onChange = (event) => {
		const {
			target: { value },
		} = event;
		setRweet(value);
	};
	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					value={rweet}
					onChange={onChange}
					type="text"
					placeholder="What's on yout mind?"
					maxLength={120}
				/>
				<input type="submit" value="Rweet" />
			</form>
			<div>
				{rweets.map((rweet) => (
					<div key={rweet.id}>
						<h4>{rweet.text}</h4>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
