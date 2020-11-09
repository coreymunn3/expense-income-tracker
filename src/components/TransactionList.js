import React, { Fragment, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import TransactionItem from './TransactionItem';

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <Fragment>
      <h3>History</h3>
      <ul className='list'>
        {transactions.map((tr) => (
          <TransactionItem key={tr.id} transaction={tr} />
        ))}
      </ul>
    </Fragment>
  );
};

export default TransactionList;
