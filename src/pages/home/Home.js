import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';
import { TransactionList } from './TransactionList';

import TransactionForm from './TransactionForm';
import styles from './Home.module.css';

const Home = () => {
  const { user } = useAuthContext();
  const { documents, error } = useCollection('transactions');

  console.log(documents);
  console.log(documents);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error && <p>{error}</p>}
        {documents && <TransactionList transactions={documents} />}
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
};

export default Home;
