import { useContext, useEffect } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);
  useEffect(() => {
    getTransactions();
  }, [])

  return (
    <>
      <h3>Transaction History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}
