import styles from "./TransactionHistory.module.css"
import PropTypes from "prop-types";

const TransactionHistory = ({ items }) => { 
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {items.map(({id, type, amount, currency}) => (
          <tr key={id} className={styles.tr}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

export default TransactionHistory;