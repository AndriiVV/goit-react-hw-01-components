import "./App.css";
import users from "./data/user.json";
import data from "./data/data.json";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";

function App() {
	return (
		<>
			<Profile props={users} />
			<Statistics stats={data} />
		</>
	);
}

export default App;
