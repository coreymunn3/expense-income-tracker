import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const TransactionItem = ({ transaction: { amount, text, id } }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <li className={amount < 0 ? 'minus' : 'plus'}>
      {text} <span>{amount}</span>
      <button className='delete-btn' onClick={() => deleteTransaction(id)}>
        x
      </button>
    </li>
  );
};

export default TransactionItem;
