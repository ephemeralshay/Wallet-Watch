import { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    // Add transaction to the global state
    const newTransaction = {
      text,
      amount: +amount
    }
    addTransaction(newTransaction);

    // reset the form input
    setText('');
    setAmount('');
  }

  return (
    <>
      <h3>Add New Transactions</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Event</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter event name..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
          >Amount <br />
            <small>NOTE: Use Negative sign for Expenses</small></label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
