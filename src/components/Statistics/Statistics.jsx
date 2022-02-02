import styles from "./Statistics.module.css"
import PropTypes from "prop-types";


const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>

    {title.length > 0 ? (<h2 className={styles.title}>{title}</h2>) : ("") }
    
    <ul className={styles.statList}>
      {stats.map(item => (
        <li className="item" key={item.label}>
				<span className={styles.label}>{item.label}</span>
				<span className={styles.percentage}>{item.percentage}%</span>
			</li>  
      )) }
		</ul>
	</section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }).isRequired
  ).isRequired,
};

export default Statistics;