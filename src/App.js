// import logo from "./logo.svg";
import "./App.css";
import users from "./user.json";
import data from "./data.json";

const Profile = ({ props }) => (
	<div class="profile">
		<div class="description">
			<img src={props.avatar} alt="User avatar" class="avatar" />
			<p class="name">{props.username}</p>
			<p class="tag">@{props.tag}</p>
			<p class="location">{props.location}</p>
		</div>

		<ul class="stats">
			<li>
				<span class="label">Followers</span>
				<span class="quantity">{props.stats.followers}</span>
			</li>
			<li>
				<span class="label">Views</span>
				<span class="quantity">{props.stats.views}</span>
			</li>
			<li>
				<span class="label">Likes</span>
				<span class="quantity">{props.stats.likes}</span>
			</li>
		</ul>
	</div>
);

const Statistics = ({ stats }) => (
	<section class="statistics">
		<h2 class="title">Upload stats</h2>

		<ul class="stat-list">
			<li class="item">
				<span class="label">{stats[0].label}</span>
				<span class="percentage">{stats[0].percentage}%</span>
			</li>
			<li class="item">
				<span class="label">.mp3</span>
				<span class="percentage">14%</span>
			</li>
			<li class="item">
				<span class="label">.pdf</span>
				<span class="percentage">41%</span>
			</li>
			<li class="item">
				<span class="label">.mp4</span>
				<span class="percentage">12%</span>
			</li>
		</ul>
	</section>
);

function App() {
	return (
		<>
			<Profile props={users} />
			<Statistics stats={data} />
		</>
	);
}

// function App() {
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React. It's cool!
// 				</a>
// 			</header>
// 		</div>
// 	);
// }

export default App;
