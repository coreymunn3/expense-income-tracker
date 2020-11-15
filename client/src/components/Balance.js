import React, { Fragment, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((tr) => tr.amount);
  const total = amounts.reduce((acc, i) => (acc += i), 0);

  return (
    <Fragment>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </Fragment>
  );
};

export default Balance;
