import { useFirestore } from '../../hooks/useFirestore';

import styles from './TransactionList.module.scss';

export const TransactionList = ({
  transactions,
  modalVisible,
  setCurrentDocument,
}) => {
  const { deleteDocument } = useFirestore('transactions');
  const total = transactions
    .map((transaction) => +transaction.amount)
    .reduce((pv, cv) => pv + cv, 0);

  const deleteAll = () => {
    modalVisible();
    setCurrentDocument(transactions);
  };

  return (
    <ul className={styles.transactions}>
      <div className={styles.transactions__buttons}>
        <div className={styles.totalExpenses}>
          <p>Total expenses: ${total}</p>
        </div>
        {transactions.length > 0 && (
          <div className={styles['delete-all']} onClick={deleteAll}>
            <p>Delete All</p>
          </div>
        )}
      </div>
      <div className={styles.transactions_container}>
        {transactions.map((transaction) => {
          return (
            <li key={transaction.id}>
              <p className={styles.name}>{transaction.name}</p>
              <p className={styles.amount}>$ {transaction.amount}</p>
              <div
                className={styles.remove_item}
                onClick={() => deleteDocument(transaction.id)}
              >
                <button>x</button>
              </div>
            </li>
          );
        })}
      </div>
    </ul>
  );
};
