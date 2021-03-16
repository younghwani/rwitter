import { dbService } from "fbase";
import React, { useEffect, useState } from "react";

const Home = () => {
	const [rweet, setRweet] = useState("");
	const [rweets, setRweets] = useState([]);
	const getRweets = async () => {
		const dbRweets = await dbService.collection("rweets").get();
		dbRweets.forEach((document) => {
			const rweetObject = {
				...document.data(),
				id: document.id,
			};
			setRweets((prev) => [rweetObject, ...prev]);
		});
	};
	useEffect(() => {
		getRweets();
	}, []);
	const onSubmit = async (event) => {
		event.preventDefault();
		await dbService.collection("rweets").add({
			rweet,
			createdAt: Date.now(),
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
						<h4>{rweet.rweet}</h4>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
