import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((tr) => tr.amount);
  const income = amounts
    .filter((amt) => amt > 0)
    .reduce((acc, i) => (acc += i), 0);
  const expenses =
    amounts.filter((amt) => amt < 0).reduce((acc, i) => (acc += i), 0) * -1;

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>+ ${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>- ${expenses}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
