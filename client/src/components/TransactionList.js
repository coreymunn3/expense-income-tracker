import React, { Fragment, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import TransactionItem from './TransactionItem';

const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  // get transactons
  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <Fragment>
      <h3>History</h3>
      <ul className='list'>
        {transactions.map((tr) => (
          <TransactionItem key={tr._id} transaction={tr} />
        ))}
      </ul>
    </Fragment>
  );
};

export default TransactionList;
