import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
	const [init, setInit] = useState(false);
	const [userObj, setUserObj] = useState(null);
	useEffect(() => {
		authService.onAuthStateChanged((user) => {
			if (user) {
				//방법1. userObj에서 사용할 요소만 선택함.(object가 무거우면 react가 re-랜더링 요소를 찾는 것 힘들어함.)
				setUserObj({
					displayName: user.displayName,
					uid: user.uid,
					updateProfile: (args) => user.updateProfile(args),
				});
				//방법2. 깊은 복사, 얕은 복사 이용 (profile을 2번 이상 연속 update 시 error)
				//setUserObj(user);
			} else {
				setUserObj(null);
			}
			setInit(true);
		});
	}, []);
	const refreshUser = () => {
		//방법1
		const user = authService.currentUser;
		setUserObj({
			displayName: user.displayName,
			uid: user.uid,
			updateProfile: (args) => user.updateProfile(args),
		});
		//방법2
		//setUserObj({ ...authService.currentUser });
	};
	return (
		<>
			{init ? (
				<AppRouter
					refreshUser={refreshUser}
					isLoggedIn={Boolean(userObj)}
					userObj={userObj}
				/>
			) : (
				"Initializing..."
			)}
			<footer>&copy; {new Date().getFullYear()} Rwitter</footer>
		</>
	);
}

export default App;
