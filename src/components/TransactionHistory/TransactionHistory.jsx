import PropTypes from 'prop-types';

import TransactionHistoryItem from 'components/TransactionHistoryItem/TransactionHistoryItem';

const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionHistoryItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
export default TransactionHistory;
