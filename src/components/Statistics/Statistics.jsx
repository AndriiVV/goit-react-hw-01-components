import "./Statistics.module.css"

const Statistics = ({ stats }) => (
	<section className="statistics">
		<h2 className="title">Upload stats</h2>

		<ul className="stat-list">
			<li className="item">
				<span className="label">{stats[0].label}</span>
				<span className="percentage">{stats[0].percentage}%</span>
			</li>
			<li className="item">
				<span className="label">.mp3</span>
				<span className="percentage">14%</span>
			</li>
			<li className="item">
				<span className="label">.pdf</span>
				<span className="percentage">41%</span>
			</li>
			<li className="item">
				<span className="label">.mp4</span>
				<span className="percentage">12%</span>
			</li>
		</ul>
	</section>
);

export default Statistics;