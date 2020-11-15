import React, { Fragment, useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      // generate random id
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: parseInt(amount),
    };
    addTransaction(newTransaction);
    // clear fields
    setText('');
    setAmount(0);
  };
  return (
    <Fragment>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            placeholder='Enter Text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br></br>
            {'(negative - expense, positive - income)'}
          </label>
          <input
            type='number'
            placeholder='Enter Amount'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          ></input>
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </Fragment>
  );
};

export default AddTransaction;
