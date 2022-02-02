import styles from "./TransactionHistory.module.css"
import PropTypes from "prop-types";

const TransactionHistory = ({ items }) => { 
  return (
    <table class={styles.transactionHistory}>
      <thead class={styles.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody class={styles.tbody}>
        {items.map(({id, type, amount, currency}) => (
          <tr key={id} class={styles.tr}>
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