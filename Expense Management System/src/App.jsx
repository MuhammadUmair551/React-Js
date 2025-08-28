import React, { useState } from 'react'
import { use } from 'react'

function App() {

  let [inp, setInp] = useState('');
  let [type, setType] = useState('income');
  let [transaction, setTransaction] = useState([]);

  let income = transaction.reduce((prev, curr) => {
    return curr.type == 'income' ? prev + Number(curr.inp) : prev
  }, 0)

  let expense = transaction.reduce((prev, curr) => {
    return curr.type == "expense" ? prev + Number(curr.inp) : prev
  }, 0)

  let balance = income - expense;
  
  function handleInput(e) {
    setInp(e.target.value);
  }

  function handleType(e) {
    setType(e.target.value);
  }

  function handleTransactions() {
    setTransaction([...transaction, { inp, type }])
    setInp('')
  }

  return (
    <>
      <h1 style={{ textAlign: 'center', padding: '20px' }}>Expense Management System</h1>
      <hr />
      <br />
      <div className='container'>
        <h2>Total Income = {income} </h2>
        <h2>Total Expense = {expense}</h2>
        <h2>Balance = {balance}</h2>
      </div>
      <br />
      <hr />
      <br /><br />
      <div className='container'>
        <input onChange={handleInput} value={inp} style={{ padding: '10px 20px' }} type="number" placeholder='income or expense?' />
        <br /><br />
        <select name="" id="" style={{ padding: '10px 20px' }} onChange={handleType}>
          <option value="income">income</option>
          <option value="expense">expense</option>
        </select>
        <br />
        <button style={{ padding: '10px 30px' }} onClick={handleTransactions}>Submit</button>
      </div>
      <br />

      <div className='container'>
        <ul>
          {
            transaction.map((value, idx) => {
              return <div key={idx}>
                <li>{value.inp} {value.type}</li>
              </div>
            })
          }
        </ul>
      </div>


    </>
  )
}
export default App